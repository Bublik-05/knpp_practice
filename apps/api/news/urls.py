from django.urls import path
from .views import NewsListAPIView, FeaturedNewsListAPIView, NewsDetailAPIView

urlpatterns = [
    path("", NewsListAPIView.as_view(), name="news-list"),
    path("featured/", FeaturedNewsListAPIView.as_view(), name="news-featured"),
    path("<slug:slug>/", NewsDetailAPIView.as_view(), name="news-detail"),
]