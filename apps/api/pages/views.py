from rest_framework import generics
from .models import Page
from .serializers import PageSerializer


class PageListAPIView(generics.ListAPIView):
    serializer_class = PageSerializer
    filterset_fields = ["page_type", "language"]

    def get_queryset(self):
        return Page.objects.filter(status=Page.Status.PUBLISHED)


class PageDetailAPIView(generics.RetrieveAPIView):
    serializer_class = PageSerializer
    lookup_field = "slug"

    def get_queryset(self):
        return Page.objects.filter(status=Page.Status.PUBLISHED)