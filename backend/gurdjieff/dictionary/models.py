# Disctionaro of Special Words
from django.db import models

from book.models import Term
from preference.models import Language


class Definition(models.Model):
    """
    Definition of a term
    """
    term = models.ForeignKey(
        Term,
        on_delete=models.PROTECT,
        related_name='dictionary_definitions')

    language = models.ForeignKey(
        Language,
        on_delete=models.PROTECT)

    description = models.CharField(
        max_length=20148)

    def __str__(self):
        return '{title} ({language})'.format({
            'title': self.term.title,
            'language': self.language.code
        })


class Spelling(models.Model):
    """
    Spelling in other languages
    """
    term = models.ForeignKey(
        Term,
        on_delete=models.PROTECT,
        related_name='dictionary_spellings')

    language = models.ForeignKey(
        Language,
        on_delete=models.PROTECT)

    spelling = models.CharField(
        max_length=2048)

    def __str__(self):
        return '{title} ({language})'.format({
            'title': self.term.title,
            'language': self.language.code
        })
