from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import authenticate, login, logout
from .models import Post
from .forms import PostForm
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from .serializers import PostSerializer
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

class PostAPIView(APIView):
     def get(self, request, post_id=None):
        if post_id is not None:
            try:
                post = Post.objects.get(id=post_id)
                serializer = PostSerializer(post)
                return Response(serializer.data)
            except Post.DoesNotExist:
                return Response(
                    {"error": "Post not found."},
                    status=status.HTTP_404_NOT_FOUND
                )
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)


class SignupAPIView(APIView):
    def post(self, request):
        form = UserCreationForm(request.data)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView(APIView):
    @csrf_exempt
    def get(self, request):
        # 로그인 페이지를 렌더링하는 로직 구현
        return Response(status=status.HTTP_200_OK)
    @csrf_exempt
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response(status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)


@method_decorator(login_required, name='post')
class LogoutAPIView(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)

@method_decorator(login_required, name='post')
class CreatePostAPIView(APIView):
    def post(self, request):
        form = PostForm(request.data)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = str(request.user.username)
            post.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)

@method_decorator(login_required, name='put')
class EditPostAPIView(APIView):
    def put(self, request, post_id):
        post = Post.objects.filter(id=post_id, author=request.user.username).first()
        if not post:
            return Response(status=status.HTTP_404_NOT_FOUND)
        form = PostForm(request.data, instance=post)
        if form.is_valid():
            form.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)

@method_decorator(login_required, name='delete')
class DeletePostAPIView(APIView):
    def delete(self, request, post_id):
        post = Post.objects.filter(id=post_id, author=request.user.username).first()
        if not post:
            return Response(status=status.HTTP_404_NOT_FOUND)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)