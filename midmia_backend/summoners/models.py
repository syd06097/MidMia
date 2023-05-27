from django.db import models

class Summoner(models.Model):
    icon_url = models.URLField()
    name = models.CharField(max_length=100, unique=True)
    rank = models.IntegerField()
    lp = models.IntegerField()
    win_rate = models.CharField(max_length=10)

    def __str__(self):
        return self.name