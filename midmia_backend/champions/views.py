from django.shortcuts import render
from selenium import webdriver
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ChampionStatsSerializer,ChampionSerializer
from selenium.webdriver.common.by import By
from .models import Champion, ChampionStats




class ChampionStatsAPIView(APIView):
    def get(self, request):
        champion_stats = ChampionStats.objects.all()
        serializer = ChampionStatsSerializer(champion_stats, many=True)
        return Response(serializer.data)
    
class ChampionAPIView(APIView):
    def get(self, request):
        champions = Champion.objects.all()
        serializer = ChampionSerializer(champions, many=True)
        return Response(serializer.data)
    



def championStatCrawl():
    browser = webdriver.Chrome("chromedriver")

    url = 'https://www.op.gg/statistics/champions'
    browser.get(url)

    champion_data = []
    for champion_rank in range(1, 164):
    # 챔피언 이름
        champion_name_xpath = '//*[@id="content-container"]/div[2]/table/tbody/tr[{}]/td[2]'
        champion_name_tag = champion_name_xpath.format(champion_rank)
        champion_name = browser.find_element(By.XPATH, champion_name_tag).text

        # KDA
        champion_rate_xpath = '//*[@id="content-container"]/div[2]/table/tbody/tr[{}]/td[4]/span'
        champion_rate_tag = champion_rate_xpath.format(champion_rank)
        champion_rate = browser.find_element(By.XPATH, champion_rate_tag).text
        kda = float(champion_rate.rstrip(':1'))

        # 승률
        champion_win_rate_xpath = '//*[@id="content-container"]/div[2]/table/tbody/tr[{}]/td[5]/div/div[2]'
        champion_win_rate_tag = champion_win_rate_xpath.format(champion_rank)
        champion_win_rate = browser.find_element(By.XPATH, champion_win_rate_tag).text

        # 게임당픽률
        champion_pick_rate_xpath = '//*[@id="content-container"]/div[2]/table/tbody/tr[{}]/td[6]/div/div[2]'
        champion_pick_rate_tag = champion_pick_rate_xpath.format(champion_rank)
        champion_pick_rate = browser.find_element(By.XPATH, champion_pick_rate_tag).text

        # 게임당밴률
        champion_ban_rate_xpath = '//*[@id="content-container"]/div[2]/table/tbody/tr[{}]/td[7]'
        champion_ban_rate_tag = champion_ban_rate_xpath.format(champion_rank)
        champion_ban_rate = browser.find_element(By.XPATH, champion_ban_rate_tag).text

        # cs
        champion_cs_xpath = '//*[@id="content-container"]/div[2]/table/tbody/tr[{}]/td[8]'
        champion_cs_tag = champion_cs_xpath.format(champion_rank)
        champion_cs = browser.find_element(By.XPATH, champion_cs_tag).text
        cs = float(champion_cs)

        # gold
        champion_gold_xpath = '//*[@id="content-container"]/div[2]/table/tbody/tr[{}]/td[9]'
        champion_gold_tag = champion_gold_xpath.format(champion_rank)
        champion_gold = browser.find_element(By.XPATH, champion_gold_tag).text
        gold = int(champion_gold.replace(',', ''))


        #챔피언 영문명
        champion_en_name_xpath = '//*[@id="content-container"]/div[2]/table/tbody/tr[{}]/td[2]/a'.format(champion_rank)
        champion_en_name_link = browser.find_element(By.XPATH, champion_en_name_xpath).get_attribute('href')
        champion_en_name = champion_en_name_link.split('/')[-1].title()
        image_link = f"http://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/{champion_en_name}.png"

        data = {
            "챔피언" : champion_name,
            "평점" : kda,
            "승률" : champion_win_rate,
            "게임당_픽률" : champion_pick_rate,
            "게임당_밴률" : champion_ban_rate,
            "cs" : cs,
            "gold" : gold,
            "챔프이미지" : image_link
        }

        champion_data.append(data)
    
    browser.quit()


    return champion_data

def save_champion_stats(request):
    champion_data = championStatCrawl()

    ChampionStats.objects.filter(tag='fake').delete()
    Champion.objects.filter(tag='fake').delete()

    for data in champion_data:
        champion_name = data['챔피언']
        image_link = data['챔프이미지']
        champion = Champion.objects.create(name=champion_name, champi_image_link = image_link , tag='fake')

        ChampionStats.objects.create(
            champion=champion,
            KDA=data['평점'],
            wins_rate=data['승률'],
            pick_rate=data['게임당_픽률'],
            ban_rate=data['게임당_밴률'],
            cs=data['cs'],
            gold=data['gold'],
            tag='fake'        
        )
    
    context = {
        'champion_data': champion_data
    }
    
    return render(request, 'champions/champion_stats.html', context)


# def save_champion_stats(request):
#     champion_data = championStatCrawl()

#     ChampionStats.objects.filter(tag='fake').delete()
#     Champion.objects.filter(tag='fake').delete()

#     for data in champion_data:
#         champion_name = data['챔피언']
#         image_link = data['챔프이미지']
#         champion, _ = Champion.objects.get_or_create(name=champion_name, defaults={'champi_image_link': image_link, 'tag': 'fake'})

#         ChampionStats.objects.create(
#             champion=champion,
#             KDA=data['평점'],
#             wins_rate=data['승률'],
#             pick_rate=data['게임당_픽률'],
#             ban_rate=data['게임당_밴률'],
#             cs=data['cs'],
#             gold=data['gold'],
#             tag='fake'
#         )

#     context = {
#         'champion_data': champion_data
#     }

#     return render(request, 'champions/champion_stats.html', context)