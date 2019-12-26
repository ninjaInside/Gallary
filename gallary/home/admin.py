from django.contrib import admin

from .models import Place

# Register your models here.
class PlaceAdmin(admin.ModelAdmin):
    search_fields = ('name', )


admin.site.register(Place, PlaceAdmin)
