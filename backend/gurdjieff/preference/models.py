from django.db import models


class SpecialPageType(models.Model):
    """
    Type of Special Pages
    """

    name = models.CharField(
        max_length=1)

    description = models.TextField(
        null=True,
        blank=True)

    def __str__(self):
        return self.name


class AssociationType(models.Model):
    """
    Type of Associations
    """

    name = models.CharField(
        max_length=100)

    description = models.TextField(
        null=True,
        blank=True)

    def __str__(self):
        return self.name


class Edition(models.Model):
    """
    Book's Editions
    """

    name = models.CharField(
        max_length=1000)

    description = models.TextField(
        null=True,
        blank=True)

    def __str__(self):
        return self.name


class Language(models.Model):
    """
    Defined languages
    """

    code = models.CharField(
        max_length=3)

    name = models.CharField(
        max_length=1000)

    def __str__(self):
        return self.name
