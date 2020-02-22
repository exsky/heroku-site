from django.contrib import admin
from .models import ArticleType, Article

# Register your models here.
# 先將資料庫的 model 註冊到 Django 的 admin
# 對於往後查詢資料庫較為方便
@admin.register(ArticleType)
class ArticleTypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'type_name')


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'article_type','author' , 'created_time', 'updated_time')