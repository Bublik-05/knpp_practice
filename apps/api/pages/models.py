from django.db import models
from django.utils.text import slugify


class Page(models.Model):
    class Status(models.TextChoices):
        DRAFT = "draft", "Draft"
        PUBLISHED = "published", "Published"
        ARCHIVED = "archived", "Archived"

    class PageType(models.TextChoices):
        ABOUT = "about", "About"
        CONTACTS = "contacts", "Contacts"
        MISSION = "mission", "Mission"
        MANAGEMENT = "management", "Management"
        COMPLIANCE = "compliance", "Compliance"
        OTHER = "other", "Other"

    class Language(models.TextChoices):
        RU = "ru", "Russian"
        KK = "kk", "Kazakh"
        EN = "en", "English"

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    content = models.TextField()
    page_type = models.CharField(max_length=30, choices=PageType.choices, default=PageType.OTHER)
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.DRAFT)
    language = models.CharField(max_length=2, choices=Language.choices, default=Language.RU)
    seo_title = models.CharField(max_length=255, blank=True)
    seo_description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["title"]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title