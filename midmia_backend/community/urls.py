from django.urls import path
from . import views
from .views import PostAPIView


app_name = 'community'

urlpatterns = [
    path("signup/", views.signup, name="signup"),
    path("login/", views.login_view, name="login"),
    path("create/", views.create_post, name="create_post"),
    path("", views.post_list, name="post_list"),
    path("<int:post_id>/", views.view_post, name="view_post"),
    path("edit/<int:post_id>/", views.edit_post, name="edit_post"),
    path("delete/<int:post_id>/", views.delete_post, name="delete_post"),
    path("api/posts/", PostAPIView.as_view(), name="post_api"),
]
