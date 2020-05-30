from django.db import models

from book.models import Page, Term
from preference.models import Language


class IndexTerm(models.Model):
    """
    Terms of index and guide
    """

    term = models.ForeignKey(
        Term,
        on_delete=models.PROTECT,
        related_name='index_terms')

    page = models.ManyToManyField(
        Page,
        through='TermPageRelation',
        blank=True)

    related_term = models.ManyToManyField(
        'self',
        through='TermTermRelation',
        symmetrical=False,
        blank=True)

    used_throughout = models.BooleanField(
        default=False)

    def __str__(self):
        return '{term}'.format(
            term = self.term.title
        )

    class Meta:
        ordering = ('term__title',)


class Reference(models.Model):
    """
    References of the term in the pages
    """

    term = models.ForeignKey(
        IndexTerm,
        on_delete=models.CASCADE,
        related_name='references')

    order = models.IntegerField()

    text = models.TextField()

    page = models.ManyToManyField(
        Page,
        through='ReferencePageRelation',
        through_fields=('reference', 'page'))

    related_term = models.ManyToManyField(
        IndexTerm,
        through='ReferenceTermRelation',
        blank=True)

    source = models.CharField(
        max_length=1000,
        null=True,
        blank=True)

    def __str__(self):
        return '{order}. {term}'.format(
            order = self.order,
            term = self.term.term.title
        )

    class Meta:
        ordering = ('term__term__title', 'order')


class Pronunciation(models.Model):
    """
    Pronunciation of the term
    """

    term = models.ForeignKey(
        IndexTerm,
        related_name='pronunciations',
        on_delete=models.CASCADE)

    language = models.ForeignKey(
        Language,
        on_delete=models.PROTECT)

    note = models.TextField(
        null=True,
        blank=True)

    def __str__(self):
        return '{term} in {lang}'.format(
            term = self.term.term.title,
            lang = self.language.code
        )


class ReferencePageRelation(models.Model):
    """
    Reference Page relationship information
    """

    REFERENCE_PAGE_RELATION_CHOICES = (
        ('ref', 'Reference'),
        ('and', 'And'),
        ('cnc', 'Concerning')
    )

    PAGE_CONTINUATION_CHOICES = (
        ('f', 'next page'),
        ('ff', 'following pages'),
        ('in', 'inset'),
    )

    reference = models.ForeignKey(
        Reference,
        on_delete=models.CASCADE)

    page = models.ForeignKey(
        Page,
        on_delete=models.CASCADE,
        related_name='references')

    type = models.CharField(
        max_length=3,
        choices=REFERENCE_PAGE_RELATION_CHOICES)

    continuation = models.CharField(
        max_length=2,
        choices=PAGE_CONTINUATION_CHOICES,
        blank=True)

    # For passim range indicates the end of page range
    passim = models.ForeignKey(
        Page,
        on_delete=models.SET_NULL,
        null=True,
        blank=True)


class ReferenceTermRelation(models.Model):
    """
    Reference Term relation
    """

    REFERENCE_TERM_RELATION_CHOICES = (
        ('cnc', 'Concerning'),
        ('cns', 'Consider Also'),
    )

    reference = models.ForeignKey(
        Reference,
        on_delete=models.CASCADE)

    term = models.ForeignKey(
        IndexTerm,
        on_delete=models.CASCADE)

    type = models.CharField(
        max_length=3,
        choices=REFERENCE_TERM_RELATION_CHOICES)

    page = models.ManyToManyField(
        Page,
        blank=True)

    # Used in Consider Also
    context = models.TextField(
        null=True,
        blank=True)

    def __str__(self):
        return self.term.term.title


class TermPageRelation(models.Model):
    """
    Term Page relationship information
    """

    term = models.ForeignKey(
        IndexTerm,
        on_delete=models.CASCADE)

    page = models.ForeignKey(
        Page,
        on_delete=models.CASCADE)

    # Used for used relationship and used throughout as ...
    context = models.TextField(
        null=True,
        blank=True)


class TermTermRelation(models.Model):
    """
    Term Term relationship information
    """

    TERM_TERM_RELATION_CHOICES = (
        ('sme', 'Same term'),
        ('sub', 'Subterm'),
        ('cns', 'Consider Also'),
        ('see', 'See'),
        ('sal', 'See Also')
    )

    term = models.ForeignKey(
        IndexTerm,
        on_delete=models.CASCADE,
        related_name='term_relations')

    related_term = models.ForeignKey(
        IndexTerm,
        on_delete=models.CASCADE)

    type = models.CharField(
        max_length=3,
        choices=TERM_TERM_RELATION_CHOICES)
