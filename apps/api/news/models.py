from django.db import models
from django.utils.text import slugify
from django_editorjs_fields import EditorJsJSONField


class News(models.Model):
    class Status(models.TextChoices):
        DRAFT = "draft", "Draft"
        REVIEW = "review", "Review"
        PUBLISHED = "published", "Published"
        ARCHIVED = "archived", "Archived"

    class ContentType(models.TextChoices):
        NEWS = "news", "News"
        PRESS_RELEASE = "press_release", "Press Release"
        EVENT = "event", "Event"

    class Language(models.TextChoices):
        RU = "ru", "Russian"
        KK = "kk", "Kazakh"
        EN = "en", "English"

    cover_image = models.ImageField(upload_to="news/covers/", blank=True, null=True)
    seo_title = models.CharField(max_length=255, blank=True)
    seo_description = models.TextField(blank=True)

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    summary = models.TextField(blank=True)

    content = EditorJsJSONField(blank=True, null=True)
    body = EditorJsJSONField(blank=True, null=True)
    content_type = models.CharField(
        max_length=30,
        choices=ContentType.choices,
        default=ContentType.NEWS,
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
    is_featured = models.BooleanField(default=False)
    published_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-published_at", "-created_at"]
        verbose_name = "News"
        verbose_name_plural = "News"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title