from django.contrib import admin

from .models import IndexTerm, Pronunciation, Reference


class PronunciationInlineAdmin(admin.StackedInline):

    model = Pronunciation
    extra = 1


class ReferenceInlineAdmin(admin.StackedInline):

    model = Reference
    extra = 2


class IndexTermAdmin(admin.ModelAdmin):

    model = IndexTerm

    inlines = (
        ReferenceInlineAdmin,
        PronunciationInlineAdmin
    )


admin.site.register(IndexTerm, IndexTermAdmin)
