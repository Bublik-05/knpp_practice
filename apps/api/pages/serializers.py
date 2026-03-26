from rest_framework import serializers
from .models import Page


class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = [
            "id",
            "title",
            "slug",
            "content",
            "page_type",
            "status",
            "language",
            "seo_title",
            "seo_description",
            "created_at",
            "updated_at",
        ]