from rest_framework import serializers
from .models import News


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = [
            "id",
            "title",
            "slug",
            "summary",
            "body",
            "content_type",
            "status",
            "language",
            "is_featured",
            "published_at",
            "created_at",
            "updated_at",
        ]