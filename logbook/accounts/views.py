from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework.authtoken import views as api_auth_views
from rest_framework import generics as api_views, serializers

UserModel = get_user_model()

class ApiLoginUserView(api_auth_views.ObtainAuthToken):
    pass

class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = (UserModel.USERNAME_FIELD, 'password')

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data.pop('password')
        return data

class ApiRegisterUserView(api_views.CreateAPIView):
    serializer_class = RegisterUserSerializer


class ApiLogoutUserView(APIView):
    pass