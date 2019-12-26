from django.shortcuts import render, redirect
from django.urls import reverse

# Create your views here.
def index(request):
    if ('Android' in request.META['HTTP_USER_AGENT'] or
            'iPhone' in request.META['HTTP_USER_AGENT']):
        return redirect(reverse('home:mobile'))
    else:
        return redirect(reverse('home:desktop'))
