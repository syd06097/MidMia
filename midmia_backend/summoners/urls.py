from django.urls import path
from . import views

app_name = 'summoners'

urlpatterns = [
    path('ranking/', views.summoner_ranking, name='ranking'),
]