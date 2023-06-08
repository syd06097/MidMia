from rest_framework import serializers
from .models import ChampionStats


class ChampionStatsSerializer(serializers.ModelSerializer):
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
