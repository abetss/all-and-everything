from django.contrib import admin

from book.models import Chapter, Page, Term

admin.site.register(Chapter)
admin.site.register(Page)
admin.site.register(Term)
