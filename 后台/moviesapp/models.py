from django.db import models


# Create your models here.

class Movie(models.Model):
    # 标号主键自增
    mid = models.AutoField(primary_key=True)
    # 电影名称
    title = models.TextField()
    # 宣传图片
    movie_img = models.TextField()
    # 导演
    director = models.TextField()
    # 演员列表
    actors = models.TextField()
    # 电影简介
    content = models.TextField()
    # 猫眼评分
    grade = models.FloatField()
    # 上映时间
    release_date = models.DateTimeField(auto_now_add=True)
