from django.db import models
from ckeditor.fields import RichTextField
from django.conf import settings


# Create your models here.          
class Champion(models.Model):
    name = models.CharField(max_length=100)
    # 필요한 다른 필드들을 추가가능

    def __str__(self):  
        return self.name


class ChampionStats(models.Model):
    champion = models.ForeignKey(Champion, on_delete=models.CASCADE)
    rating = models.FloatField()
    wins = models.FloatField()
    pick_rate = models.FloatField()
    ban_rate = models.FloatField()
    cs = models.FloatField()
    # 필요한 다른 필드들을 추가할 수있음

    def __str__(self):
        return f"{self.champion.name} Stats"
