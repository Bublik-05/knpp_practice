from rest_framework import generics
from .models import News
from .serializers import NewsSerializer


class NewsListAPIView(generics.ListAPIView):
    serializer_class = NewsSerializer
    filterset_fields = ["content_type", "language", "is_featured"]

    def get_queryset(self):
        return News.objects.filter(status=News.Status.PUBLISHED)


class NewsDetailAPIView(generics.RetrieveAPIView):
    serializer_class = NewsSerializer
    lookup_field = "slug"

    def get_queryset(self):
        return News.objects.filter(status=News.Status.PUBLISHED)