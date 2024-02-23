from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework.authtoken import views as api_auth_views
from rest_framework import generics as api_views

from accounts.serializers import RegisterUserSerializer

UserModel = get_user_model()

class ApiLoginUserView(api_auth_views.ObtainAuthToken):
    pass



class ApiRegisterUserView(api_views.CreateAPIView):
    serializer_class = RegisterUserSerializer


class ApiLogoutUserView(APIView):
    pass