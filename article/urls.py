from django.urls import path
from . import views

urlpatterns = [
    path('', views.article_list, name="blog"),
    path('list', views.article_list, name="article_list"),
    path('<int:article_pk>', views.article_detail, name="article_detail"),
    path('type/<int:article_type_pk>', views.articles_with_type, name="articles_with_type"),
]
