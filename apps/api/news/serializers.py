from rest_framework import serializers
from .models import News


class BaseNewsSerializer(serializers.ModelSerializer):
    cover_image = serializers.SerializerMethodField()
    category = serializers.SerializerMethodField()
    published_date = serializers.SerializerMethodField()

    def get_cover_image(self, obj):
        if not obj.cover_image:
            return None

        request = self.context.get("request")
        if request:
            return request.build_absolute_uri(obj.cover_image.url)
        return obj.cover_image.url

    def get_category(self, obj):
        mapping = {
            News.ContentType.NEWS: "Новости",
            News.ContentType.EVENT: "События",
            News.ContentType.PRESS_RELEASE: "Пресс-релизы",
        }
        return mapping.get(obj.content_type, obj.get_content_type_display())

    def get_published_date(self, obj):
        dt = obj.published_at or obj.created_at
        return dt.strftime("%d.%m.%Y") if dt else None


class NewsCardSerializer(BaseNewsSerializer):
    class Meta:
        model = News
        fields = [
            "id",
            "title",
            "slug",
            "summary",
            "cover_image",
            "category",
            "content_type",
            "language",
            "published_at",
            "published_date",
            "is_featured",
        ]


class NewsSerializer(BaseNewsSerializer):
    class Meta:
        model = News
        fields = [
            "id",
            "title",
            "slug",
            "summary",
            "cover_image",
            "category",
            "body",
            "content",
            "content_type",
            "status",
            "language",
            "is_featured",
            "published_at",
            "published_date",
            "created_at",
            "updated_at",
        ]