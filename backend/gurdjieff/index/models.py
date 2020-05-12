from django.db import models

from preference.models import (AssociationType, Edition, Language,
                               SpecialPageType)


class Pronunciation(models.Model):
    """
    Pronunciation of a term
    """

    language = models.ForeignKey(
        Language,
        on_delete=models.PROTECT)

    phonetic = models.CharField(
        null=True,
        blank=True,
        max_length=1000)

    spelling = models.CharField(
        max_length=1000,
        null=True,
        blank=True)

    sound = models.FileField(
        blank=True,
        null=True)

    def __str__(self):
        return '{}({})'.format(self.phonetic, self.language)


# Dictionary Related
class SubWord(models.Model):
    """
    Sub-words for dictuinary
    """

    word = models.CharField(
        max_length=1000)

    description = models.TextField()

    language = models.ForeignKey(
        Language,
        on_delete=models.SET_NULL,
        null=True,
        blank=True)

    def __str__(self):
        return self.word


class Term(models.Model):
    """
    Terms for index
    """

    title = models.CharField(
        max_length=1000)

    # Index Guide definition
    parent_term = models.ForeignKey(
        'self',
        on_delete=models.SET_NULL,
        related_name='children_terms',
        null=True,
        blank=True)

    in_other_languages = models.ManyToManyField(
        Pronunciation,
        blank=True)

    # Dictionary definition
    description = models.TextField(
        null=True,
        blank=True)

    sub_words = models.ManyToManyField(
        SubWord,
        blank=True,
        related_name='words')

    in_other_languages = models.ManyToManyField(
        Pronunciation,
        blank=True)

    def __str__(self):
        return self.title


class SpecialPage(models.Model):
    """
    Special Page model
    """

    page = models.IntegerField()

    type = models.ForeignKey(
        SpecialPageType,
        on_delete=models.SET_NULL,
        null=True,
        blank=True)

    def __str__(self):
        return str(self.page)


class Association(models.Model):
    """
    Associations of definitions
    TODO: Not sure yet, and Special Pages remained
    """

    type = models.ForeignKey(
        AssociationType,
        on_delete=models.SET_NULL,
        null=True,
        blank=True)

    quotation = models.TextField(
        null=True,
        blank=True)

    terms = models.ManyToManyField(
        Term,
        blank=True)

    pages = models.CharField(
        max_length=2000,
        null=True,
        blank=True)

    special_pages = models.ManyToManyField(
        SpecialPage,
        blank=True)

    def __str__(self):
        if self.terms.all().count() > 0 or len(self.pages) == 0:
            return '{}({})'.format(','.join(list(self.terms.all().values_list('title', flat=True))), self.type.name)
        elif self.pages and len(self.pages) > 0:
            return '{}({})'.format(self.pages, self.type.name)
        else:
            return '({})'.format(self.type.name)


class Definition(models.Model):
    """
    Definitions of a term
    """

    term = models.ForeignKey(
        Term,
        on_delete=models.PROTECT,
        related_name='definitions')

    edition = models.ForeignKey(
        Edition,
        on_delete=models.CASCADE,
        related_name='definitions')

    title = models.CharField(
        max_length=1000)

    used_through_out = models.BooleanField(
        default=False)

    pronunciation = models.ForeignKey(
        Pronunciation,
        on_delete=models.SET_NULL,
        null=True,
        blank=True)

    association = models.ManyToManyField(
        Association,
        blank=True)

    def _str__(self):
        return '{}({})'.format(self.term, self.edition.name)
