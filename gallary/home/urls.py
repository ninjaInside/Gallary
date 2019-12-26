from django.urls import path

from . import views

app_name = 'home'
urlpatterns = [
    path('desktop/', views.desktop, name='desktop'),
    path('mobile/', views.mobile, name='mobile'),
]
