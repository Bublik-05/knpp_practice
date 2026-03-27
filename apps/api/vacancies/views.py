from rest_framework import generics
from .models import Vacancy
from .serializers import VacancySerializer


class VacancyListAPIView(generics.ListAPIView):
    serializer_class = VacancySerializer
    filterset_fields = ["employment_type", "language"]

    def get_queryset(self):
        return Vacancy.objects.filter(status=Vacancy.Status.PUBLISHED)


class VacancyDetailAPIView(generics.RetrieveAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.filter(status=Vacancy.Status.PUBLISHED)