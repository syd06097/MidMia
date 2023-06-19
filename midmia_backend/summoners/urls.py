from django.urls import path
from . import views

app_name = 'summoners'

urlpatterns = [
    path('ranking/', views.summoner_ranking, name='ranking'),
    path('api/ranking/', views.SummonerRankingAPIView.as_view(), name='api_ranking'),
]