from django.db import models
from ckeditor.fields import RichTextField
from django.conf import settings


# Create your models here.          
class Champion(models.Model):
    name = models.CharField(max_length=100)
    tag = models.CharField(max_length=10, default='na')
    # 필요한 다른 필드들을 추가가능

    def __str__(self):  
        return self.name


class ChampionStats(models.Model):
    champion = models.ForeignKey(Champion, on_delete=models.CASCADE)
    KDA = models.FloatField()
    wins_rate = models.CharField(max_length=10)
    pick_rate = models.CharField(max_length=10)
    ban_rate = models.CharField(max_length=10)
    cs = models.FloatField()
    gold = models.IntegerField()
    tag = models.CharField(max_length=10, default='na')
    # 필요한 다른 필드들을 추가할 수있음

    def __str__(self):
        return f"{self.champion.name} Stats"
