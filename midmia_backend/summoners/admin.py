from django.contrib import admin
from .models import Summoner

class SummonerAdmin(admin.ModelAdmin):
    ordering = ['ranking']

admin.site.register(Summoner, SummonerAdmin)
