from django.urls import path
from . import views
from .views import (
    SignupAPIView,
    LoginAPIView,
    LogoutAPIView,
    CreatePostAPIView,
    EditPostAPIView,
    DeletePostAPIView,
    PostAPIView
)


app_name = 'community'

urlpatterns = [
    path("signup/", SignupAPIView.as_view(), name="signup"),
    path("login/", LoginAPIView.as_view(), name="login"),
    path("logout/", LogoutAPIView.as_view(), name="logout"),
    path("create/", CreatePostAPIView.as_view(), name="create_post"),
    path("", PostAPIView.as_view(), name="post_list"),
    path("<int:post_id>/", PostAPIView.as_view(), name="view_post"),
    path("edit/<int:post_id>/", EditPostAPIView.as_view(), name="edit_post"),
    path("delete/<int:post_id>/", DeletePostAPIView.as_view(), name="delete_post"),
]
