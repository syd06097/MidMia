from django.shortcuts import render, redirect
from .models import Post
from .forms import PostForm

def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('community:post_list')
    else:
        form = PostForm()

    context = {'form': form}
    return render(request, 'community/create_post.html', context)

def post_list(request):
    posts = Post.objects.all()
    context = {'posts': posts}
    return render(request, 'community/post_list.html', context)