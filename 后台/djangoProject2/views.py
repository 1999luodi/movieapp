from django.http import HttpResponse
from django.shortcuts import render



def hello_msg(request):
    msg = 'Hello Django'
    img = 'static/images/movie04.jpg'
    return render(request, 'hello.html', {
        'msg': msg,
        'img': img
    })