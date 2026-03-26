from django.urls import path
from .views import PageListAPIView, PageDetailAPIView

urlpatterns = [
    path("", PageListAPIView.as_view(), name="page-list"),
    path("<slug:slug>/", PageDetailAPIView.as_view(), name="page-detail"),
]