from django.urls import path
from DigikalaAccounts.views import user_signup, user_login


urlpatterns = [
    path('signup', user_signup),
    path('login', user_login),
]
