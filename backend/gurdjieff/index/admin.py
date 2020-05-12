from django.contrib import admin

from .models import (
    Pronunciation,
    SubWord,
    Term,
    SpecialPage,
    Association,
    Definition)


class DefinitionInlineAdmin(admin.StackedInline):

    model = Definition
    extra = 2


class TermAdmin(admin.ModelAdmin):

    model = Term

    inlines = (
        DefinitionInlineAdmin,
    )


admin.site.register(Pronunciation)
admin.site.register(SubWord)
admin.site.register(Term, TermAdmin)
admin.site.register(SpecialPage)
admin.site.register(Association)
admin.site.register(Definition)

