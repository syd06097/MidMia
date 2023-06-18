from django.urls import path
from . import views
from .views import ChampionStatsAPIView


app_name = 'champions'
urlpatterns = [
   path('', views.save_champion_stats, name='save_champion_stats'),
   path(
        "api/champion-stats/", ChampionStatsAPIView.as_view(), name="champion_stats_api"
    ),
    path('save-champion-stats/', views.save_champion_stats, name='save_champion_stats'),
]