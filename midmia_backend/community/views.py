from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout
from .models import Post
from .forms import PostForm
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from .serializers import PostSerializer

class PostAPIView(APIView):
    def get(self, request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    
def signup(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect("community:post_list")
    else:
        form = UserCreationForm()
    return render(request, "community/signup.html", {"form": form})


def login_view(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect("community:post_list")
    else:
        form = AuthenticationForm()
    return render(request, "community/login.html", {"form": form})


def logout_view(request):
    logout(request)
    return redirect("community:post_list")


@login_required
def create_post(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect("community:post_list")
    else:
        form = PostForm()
    return render(request, "community/create_post.html", {"form": form})

def post_list(request):
    posts = Post.objects.all()
    context = {'posts': posts}
    return render(request, 'community/post_list.html', context)

def view_post(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    context = {"post": post}
    return render(request, "community/view_post.html", context)


@login_required
def edit_post(request, post_id):
    post = get_object_or_404(Post, id=post_id)

    if post.author != request.user:
        return redirect("community:post_list")

    if request.method == "POST":
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
            return redirect("community:post_list")
    else:
        form = PostForm(instance=post)

    return render(request, "community/edit_post.html", {"form": form, "post": post})

@login_required
def delete_post(request, post_id):
    post = get_object_or_404(Post, id=post_id)

    if post.author != request.user:
        return redirect("community:post_list")

    if request.method == "POST":
        post.delete()
        return redirect("community:post_list")

    return render(request, "community/delete_post.html", {"post": post})