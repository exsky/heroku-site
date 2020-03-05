from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404
from .models import Article, ArticleType

# Create your views here.
def index(request):
    context = {}
    context['articles'] = Article.objects.all() \
                            .order_by('created_time').reverse()
    context.update(get_article_types())
    return render(request, 'blog/index.html', context)

def article_list(request):
    context = {}
    context['articles'] = Article.objects.all()
    # 傳文章列表 dict 格式，到 article_html
    return render(request, 'article/article_list.html', context)


def article_detail(request, article_pk):
    context = {}
    context['article'] = get_object_or_404(Article, pk=article_pk)
    return render(request, 'article/article_detail.html', context)


def articles_with_type(request, article_type_pk):
    context = {}
    # 以傳入的 pk 去抓出 ArticleType 的 id
    article_type = get_object_or_404(ArticleType, pk=article_type_pk)
    # 撈取 article_type 是 pk id 的文章
    context['articles'] = Article.objects.filter(article_type=article_type)
    context['article_type'] = article_type
    return render(request, 'article/article_by_type.html', context)

def article_types(request):
    context = get_article_types()
    return render(request, 'blog/sidebar.html', context)

def get_article_types():
    context = {}
    queryset = ArticleType.objects.values_list('id', 'type_name')
    num_type_map = {}
    # num_type_map[n] = 'xxx'
    for a in queryset:
        num_type_map[a[0]] = a[1]
    context['all_types'] = num_type_map
    return context