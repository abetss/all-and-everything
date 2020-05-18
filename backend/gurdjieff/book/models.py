from django.db import models

from preference.models import Edition


class Chapter(models.Model):
    """
    Chapters of the book
    """

    number = models.IntegerField(
        unique=True
    )

    name = models.CharField(
        max_length=1000)

    def __str__(self):
        return '{chapter} - {name}'.format(
            chapter = self.number,
            name = self.name
        )

    class Meta:
        ordering = ('number',)


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

    def __str__(self):
        return '{page} of {chapter} ({edition})'.format(
            page = self.number,
            chapter = self.chapter.number,
            edition = self.edition.name
        )


class Term(models.Model):
    """
    Terms of the book
    """

    title = models.CharField(
        max_length=1000)

    # Original in russian
    original = models.CharField(
        max_length=1000,
        null=True,
        blank=True)

    page = models.ManyToManyField(
        Page)

    def __str__(self):
        return '{term}'.format(
            term = self.title
        )
