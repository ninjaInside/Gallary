from django.shortcuts import render
from django.http import HttpResponse

from .models import Place

# Create your views here.
def index(request):
    posts = Place.objects.all()
    return render(request, 'homepage/index.html', {'posts': posts})
