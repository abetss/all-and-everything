from django.db import models

from preference.models import Edition


class Chapter(models.Model):
    """
    Chapters of the book
    """

    number = models.IntegerField()

    name = models.CharField(
        max_length=1000)


class Page(models.Model):
    """
    Pages of the book
    """

    # TODO: Selection needs to have '-' for range selection

    number = models.IntegerField()

    edition = models.ForeignKey(
        Edition,
        on_delete=models.PROTECT,
        related_name='pages')

    chapter = models.ForeignKey(
        Chapter,
        on_delete=models.PROTECT)


class Term(models.Model):
    """
    Terms of the book
    """

    title = models.CharField(
        max_length=1000)

    # Original in russian
    original = models.CharField(
        max_length=1000)

    page = models.ForeignKey(
        Page,
        on_delete=models.PROTECT)
