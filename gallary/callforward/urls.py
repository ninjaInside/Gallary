from django.urls import path

from . import views

app_name = 'callforward'
urlpatterns = [
    path('', views.index, name='index'),
]
