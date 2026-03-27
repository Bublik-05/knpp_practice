from rest_framework import serializers
from .models import Vacancy


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = [
            "id",
            "title",
            "department",
            "location",
            "employment_type",
            "description",
            "status",
            "language",
            "published_at",
            "expires_at",
            "created_at",
            "updated_at",
        ]