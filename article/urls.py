from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="blog"),
    path('list', views.article_list, name="article_list"),
    path('alltypes', views.article_types, name="article_types"),
    path('<int:article_pk>', views.single_article, name="single_article"),
    path('type/<int:article_type_pk>', views.article_by_type, name="article_by_type"),
]
