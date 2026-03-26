from django.db import models
from django.utils.text import slugify


class Page(models.Model):
    class Status(models.TextChoices):
        DRAFT = "draft", "Draft"
        PUBLISHED = "published", "Published"
        ARCHIVED = "archived", "Archived"

    class PageType(models.TextChoices):
        ABOUT = "about", "About"
        MANAGEMENT = "management", "Management"
        SAFETY = "safety", "Safety"
        COMPLIANCE = "compliance", "Compliance"
        NPA = "npa", "NPA"
        DEVELOPMENT_PLAN = "development_plan", "Development Plan"
        ADDITIONAL_INFO = "additional_info", "Additional Info"
        GALLERY = "gallery", "Gallery"
        CONTACTS = "contacts", "Contacts"
        OTHER = "other", "Other"

    class Language(models.TextChoices):
        RU = "ru", "Russian"
        KK = "kk", "Kazakh"
        EN = "en", "English"

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    content = models.TextField()
    page_type = models.CharField(
        max_length=50,
        choices=PageType.choices,
        default=PageType.OTHER,
    )
    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.DRAFT,
    )
    language = models.CharField(
        max_length=2,
        choices=Language.choices,
        default=Language.RU,
    )
    seo_title = models.CharField(max_length=255, blank=True)
    seo_description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["title"]
        verbose_name = "Page"
        verbose_name_plural = "Pages"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title