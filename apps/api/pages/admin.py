from django.contrib import admin
from .models import Page


@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    list_display = ("title", "page_type", "status", "language", "updated_at")
    list_filter = ("page_type", "status", "language")
    search_fields = ("title", "content", "seo_title", "seo_description")
    prepopulated_fields = {"slug": ("title",)}