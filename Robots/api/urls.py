from django.urls import path

from . import views

urlpatterns = [
    path('robots/', views.allRobots, name='test'), 
    path('robots/<str:pk>/', views.singleRobot, name="single-robot"), 
]