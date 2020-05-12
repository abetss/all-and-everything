from django.contrib import admin

from .models import (
    SpecialPageType,
    AssociationType,
    Edition,
    Language)


admin.site.register(SpecialPageType)
admin.site.register(AssociationType)
admin.site.register(Edition)
admin.site.register(Language)
