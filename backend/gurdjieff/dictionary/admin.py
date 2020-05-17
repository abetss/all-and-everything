from django.contrib import admin

from dictionary.models import Definition, Spelling

admin.site.register(Definition)
admin.site.register(Spelling)
