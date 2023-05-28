from django.db import models

class Summoner(models.Model):
    icon_url = models.URLField()
    name = models.CharField(max_length=100, unique=True)
    ranking = models.IntegerField(default=0)
    lp = models.IntegerField(null=True)
    win_rate = models.CharField(max_length=10)
    tier = models.CharField(max_length=20, default='null')

    def __str__(self):
        return self.name