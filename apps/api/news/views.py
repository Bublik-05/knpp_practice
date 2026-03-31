from rest_framework import generics
from .models import News
from .serializers import NewsSerializer, NewsCardSerializer


class NewsListAPIView(generics.ListAPIView):
    serializer_class = NewsCardSerializer
    filterset_fields = ["content_type", "language", "is_featured"]

    def get_queryset(self):
        return News.objects.filter(
            status=News.Status.PUBLISHED
        ).order_by("-published_at", "-created_at")


class FeaturedNewsListAPIView(generics.ListAPIView):
    serializer_class = NewsCardSerializer

    def get_queryset(self):
        return News.objects.filter(
            status=News.Status.PUBLISHED,
            is_featured=True,
        ).order_by("-published_at", "-created_at")[:6]


class NewsDetailAPIView(generics.RetrieveAPIView):
    serializer_class = NewsSerializer
    lookup_field = "slug"

    def get_queryset(self):
        return News.objects.filter(status=News.Status.PUBLISHED)