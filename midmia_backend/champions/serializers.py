from rest_framework import serializers
from .models import ChampionStats, Champion


class ChampionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Champion
        fields = '__all__'

class ChampionStatsSerializer(serializers.ModelSerializer):
    champion = ChampionSerializer()
    class Meta:
        model = ChampionStats
        fields = [
            "champion",
            "KDA",
            "wins_rate",
            "pick_rate",
            "ban_rate",
            "cs",
            "gold",
            "tag",
        ]

