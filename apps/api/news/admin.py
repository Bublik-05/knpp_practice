from django.contrib import admin
from .models import News


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "content_type",
        "status",
        "language",
        "is_featured",
        "published_at",
        "created_at",
    )
    list_filter = ("content_type", "status", "language", "is_featured")
    search_fields = ("title", "summary", "body")
    prepopulated_fields = {"slug": ("title",)}