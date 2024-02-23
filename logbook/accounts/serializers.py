from django.contrib.auth import get_user_model
from rest_framework import serializers
UserModel = get_user_model()

class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = (UserModel.USERNAME_FIELD, 'password')

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data.pop('password')
        return data