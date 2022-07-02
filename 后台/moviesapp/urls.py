from django.urls import  path
from moviesapp import views
urlpatterns=[
    path('getbyid/',views.getbyid),
    path('all/',views.getall),
    path('new/',views.newmovie),
    path('save/',views.save),
    path('alljson/',views.get_json)
]