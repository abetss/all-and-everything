from django.contrib import admin

from index.models import IndexTerm, Pronunciation, Reference


class PronunciationInlineAdmin(admin.StackedInline):

    model = Pronunciation
    extra = 1


class ReferenceInlineAdmin(admin.TabularInline):

    model = Reference
    extra = 1


class TermPageInlineAdmin(admin.StackedInline):

    model = IndexTerm.page.through
    extra = 1


class TermTermInlineAdmin(admin.StackedInline):

    model = IndexTerm.related_term.through
    fk_name = 'term'
    extra = 1

class IndexTermAdmin(admin.ModelAdmin):

    model = IndexTerm

    inlines = (
        TermPageInlineAdmin,
        TermTermInlineAdmin,
        ReferenceInlineAdmin,
        PronunciationInlineAdmin
    )


class ReferencePageInlineAdmin(admin.TabularInline):

    model = Reference.page.through


class ReferenceTermInlineAdmin(admin.TabularInline):

    model = Reference.related_term.through


class ReferenceAdmin(admin.ModelAdmin):

    model = Reference
    
    inlines = (
        ReferencePageInlineAdmin,
        ReferenceTermInlineAdmin
    )


admin.site.register(IndexTerm, IndexTermAdmin)
admin.site.register(Reference, ReferenceAdmin)
