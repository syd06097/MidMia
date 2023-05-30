from django.urls import path
from . import views

app_name = 'champions'
urlpatterns = [
   path('', views.save_champion_stats, name='save_champion_stats')
]