from django.contrib import admin
from .models import Vacancy


@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "department",
        "location",
        "employment_type",
        "status",
        "language",
        "published_at",
    )
    list_filter = ("employment_type", "status", "language")
    search_fields = ("title", "department", "location", "description")