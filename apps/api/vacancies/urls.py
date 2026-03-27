from django.urls import path
from .views import VacancyListAPIView, VacancyDetailAPIView

urlpatterns = [
    path("", VacancyListAPIView.as_view(), name="vacancy-list"),
    path("<int:pk>/", VacancyDetailAPIView.as_view(), name="vacancy-detail"),
]