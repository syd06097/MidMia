from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        id = serializers.IntegerField(read_only=True)
        fields = ["id", "title", "content", "author", "created_at", "category","subcategory"]
