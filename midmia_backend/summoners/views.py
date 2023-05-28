import requests
from django.shortcuts import render
from .models import Summoner
from django.conf import settings
import random
from operator import attrgetter

def summoner_ranking(request):
    # Riot API 관련 설정
    api_key = settings.API_KEY
    base_url = 'https://kr.api.riotgames.com'
    queue = 'RANKED_SOLO_5x5'
    summoners = []


    ranking_url = f"{base_url}/lol/league/v4/challengerleagues/by-queue/{queue}"
    # Riot API를 통해 소환사 랭킹 데이터 가져오기
    headers = {'X-Riot-Token': api_key}
    response = requests.get(ranking_url, headers=headers)
    data = response.json()['entries']
    print(data)

    # 기존 챌린저 소환사 데이터 삭제
    Summoner.objects.filter(tier='CHALLENGER').delete()

    # 소환사 데이터 저장
    for summoner_data in data:
        summoner_name = summoner_data['summonerName']
        profile_icon_id = get_profile_icon_id()
        icon_url = f"http://ddragon.leagueoflegends.com/cdn/13.10.1/img/profileicon/{profile_icon_id}.png"
        win_rate=summoner_data['wins'] / (summoner_data['wins'] + summoner_data['losses'])
        win_rate_formatted = f"{win_rate:.2%}"

        summoner = Summoner(
            icon_url=icon_url,
            name=summoner_name,
            lp=summoner_data['leaguePoints'],
            win_rate=win_rate_formatted,
            tier='CHALLENGER',
        )
        summoners.append(summoner)


    # 소환사 목록 저장
    Summoner.objects.bulk_create(summoners)
    
    #rank 지정
    summoners.sort(key=attrgetter('lp'), reverse=True)  # lp를 기준으로 내림차순 정렬
    for i, summoner in enumerate(summoners):
        summoner.ranking = i + 1

    for summoner in summoners:
        Summoner.objects.filter(id=summoner.id).update(ranking=summoner.ranking)

    context = {'summoners': summoners}
    return render(request, 'summoners/summoner_ranking.html', context)


    #프로필 아이콘 ID 지정
def get_profile_icon_id():
    return random.randint(1,5492)