import requests
from django.shortcuts import render
from .models import Summoner
from django.conf import settings

def summoner_ranking(request):
    # Riot API 관련 설정
    api_key = settings.API_KEY
    base_url = 'https://kr.api.riotgames.com'
    queue = 'RANKED_SOLO_5x5'
    tier = 'CHALLENGER'
    division = 'I'
    num_pages = 1  # 가져올 페이지 수
    summoners_per_page = 200  # 페이지당 소환사 수
    summoners = []

    for page in range(1, num_pages + 1):
        ranking_url = f"{base_url}/lol/league-exp/v4/entries/{queue}/{tier}/{division}?page={page}&per_page={summoners_per_page}"
        
        # Riot API를 통해 소환사 랭킹 데이터 가져오기
        headers = {'X-Riot-Token': api_key}
        response = requests.get(ranking_url, headers=headers)
        data = response.json()
        print(data)

        # 소환사 데이터 저장
        for index, summoner_data in enumerate(data):
            summoner_name = summoner_data['summonerName']
            profile_icon_id = get_profile_icon_id(summoner_name)
            if 'status' in data:
                break
            icon_url = f"http://ddragon.leagueoflegends.com/cdn/13.10.1/img/profileicon/{profile_icon_id}.png"
            
            rank = (page - 1) * summoners_per_page + index + 1  # 순위 계산
            win_rate=summoner_data['wins'] / (summoner_data['wins'] + summoner_data['losses'])
            win_rate_formatted = f"{win_rate:.2%}"
            summoner = Summoner(
                icon_url=icon_url,
                name=summoner_name,
                rank=rank,
                lp=summoner_data['leaguePoints'],
                win_rate=win_rate_formatted,
            )
            summoners.append(summoner)

    # 소환사 목록 저장
    Summoner.objects.bulk_create(summoners)

    context = {'summoners': summoners}
    return render(request, 'summoners/summoner_ranking.html', context)

def get_profile_icon_id(summoner_name):
    api_key = settings.API_KEY2
    base_url = 'https://kr.api.riotgames.com'
    summoner_info_url = f"{base_url}/lol/summoner/v4/summoners/by-name/{summoner_name}"
    headers = {'X-Riot-Token': api_key}
    response = requests.get(summoner_info_url, headers=headers)
    data = response.json()
    print(data)
    if 'profileIconId' in data:
        return data['profileIconId']
    else:
        return 1