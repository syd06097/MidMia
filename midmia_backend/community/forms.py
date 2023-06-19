from django import forms
from .models import Post
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class PostForm(forms.ModelForm):
    POSITION_CATEGORY_CHOICES = [
        ("top", "탑"),
        ("jungle", "정글"),
        ("mid", "미드"),
        ("bottom", "바텀"),
        ("support", "서폿"),
    ]

    FREE_CATEGORY_CHOICES = [
        ("humor", "유머"),
        ("freef", "자유"),
    ]

    category = forms.ChoiceField(
        choices=[
            ("position", "포지션 게시판"),
            ("free", "자유 게시판"),
        ]
    )

    subcategory = forms.ChoiceField(choices=[])

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["category"].widget.attrs["onchange"] = "setSubcategories()"

    class Meta:
        model = Post
        fields = ("title", "content", "author", "category", "subcategory")
        widgets = {
            "author": forms.HiddenInput(),
        }


    def clean_category(self):
        category = self.cleaned_data["category"]
        if category == "position":
            self.fields["subcategory"].choices = self.POSITION_CATEGORY_CHOICES
        elif category == "free":
            self.fields["subcategory"].choices = self.FREE_CATEGORY_CHOICES
        return category



class SignupForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2"]