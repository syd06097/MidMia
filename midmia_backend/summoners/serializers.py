from rest_framework import serializers
from .models import Summoner

class SummonerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Summoner
        fields = [
            "icon_url",
            "name",
            "ranking",
            "lp",
            "win_rate",
            "tier",
            "wins",
            "losses"
        ]
