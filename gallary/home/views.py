from django.shortcuts import render

from .models import Place

# Create your views here.
def desktop(request):
    places = Place.objects.all()
    return render(request, 'home/desktop.html', {'places': places})


def mobile(request):
    places = Place.objects.all()
    return render(request, 'home/mobile.html', {'places': places})
