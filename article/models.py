from django.db import models
from django.contrib.auth.models import User

# The Article 
class ArticleType(models.Model):    # 文章分類
    type_name = models.CharField(max_length=15)


    def __str__(self):
        return self.type_name


class Article(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)
    article_type = models.ForeignKey(ArticleType, on_delete=models.CASCADE)


    def __str__(self):
        return "<Article: %s>" % self.title