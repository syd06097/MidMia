from django import forms
from .models import Post
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class PostForm(forms.ModelForm):
    CATEGORY_CHOICES = [
        ("top", "탑"),
        ("jungle", "정글"),
        ("mid", "미드"),
        ("bottom", "바텀"),
        ("support", "서폿"),
        ("all", "전체"),
    ]

    category = forms.ChoiceField(choices=CATEGORY_CHOICES)

    class Meta:
        model = Post
        fields = ("title", "content", "author", "category", "subcategory")


class SignupForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2"]