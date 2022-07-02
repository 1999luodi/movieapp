from django.http import JsonResponse
from django.shortcuts import render, redirect
from moviesapp.models import Movie
# Create your views here.

# 获取movie
def getbyid(request):
    id= int(request.GET.get('id'))
    movie=Movie.objects.get(mid=id)
    print(movie)
    return render(request,"movie.html",{'movie':movie})

def getall(request):
    movies=Movie.objects.all()
    return render(request,"movie.html",{'movies':movies})

# 新增movie
def newmovie(request):
    return render(request,"newmovie.html")

def save(request):
    # ptitle = request.POST.get('title')
    # pimg = request.POST.get('movie_img')
    # pdir = request.POST.get('director')
    # pact = request.POST.get('actors')
    # pcontent = request.POST.get('content')
    # pgrade = request.POST.get('grade')
    # prelease_date = request.POST.get('release_date')

    movie=Movie(
        title=request.POST.get('title'),
        movie_img=request.POST.get('movie_img'),
        director=request.POST.get('director'),
        actors=request.POST.get('actors'),
        content=request.POST.get('content'),
        grade=request.POST.get('grade'),
        release_date=request.POST.get('release_date')
    )
    print('进入')
    movie.save()
    return redirect('/movie/all')

# 删除
def deletebyid(request):
    id=int(request.GET.get('id'))
    movie=Movie()
    if id!=None:
        movie=Movie.objects.get(mid=id)
        movie.delete()
        msg = 'succeed'
    else:
        msg= 'failed'
        print("删除失败")

    return JsonResponse({'movie': movie,'msg':msg})

# 更新
def updatebyid(request):
    pmid=request.POST.get('id')
    ptitle = request.POST.get('title')
    pimg = request.POST.get('movie_img')
    pdir = request.POST.get('director')
    pact = request.POST.get('actors')
    pcontent = request.POST.get('content')
    pgrade = request.POST.get('grade')
    prelease_date = request.POST.get('release_date')



# API传值
# 前后端分离，传json
def get_json(request):
    movies=Movie.objects.all()
    data=list(movies.values())
    print(data)
    return JsonResponse({'data':data,'code':200,'msg':'获取数据'})