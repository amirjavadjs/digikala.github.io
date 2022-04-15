import email
from django import forms
from django.contrib.auth.models import User
from django.core import validators


class SignupForm(forms.Form):
    username = forms.CharField(
        widget=forms.TextInput(
            attrs={'placeholder': 'نام کاربری', 'id': 'input', 'class': 'input d-block p-2 mb-3', 'style': 'border-radius: 5px; outline:none; border:1px solid rgb(85, 83, 83);'}
        ),
        validators=[
            validators.MinLengthValidator(limit_value=5, message='نام کابری نمیتواند کمتر از 5 کاراکتر باشد')
        ]
    )

    email = forms.EmailField(
        widget=forms.EmailInput(
            attrs={'placeholder': 'ایمیل', 'id': 'input', 'class': 'input d-block p-2 mb-3', 'style': 'border-radius: 5px; outline:none; border:1px solid rgb(85, 83, 83);'}
        ),
        validators=[
            validators.EmailValidator('ایمیل وارد شده معتبر نمیباشد')
        ]
    )

    password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={'placeholder': 'گذرواژه', 'id': 'input', 'class': 'input d-block p-2 mb-3', 'style': 'border-radius: 5px; outline:none; border:1px solid rgb(85, 83, 83);'}
        )
    )

    re_password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={'placeholder': 'تکرار گذرواژه', 'id': 'input', 'class': 'input d-block p-2 mb-3', 'style': 'border-radius: 5px; outline:none; border:1px solid rgb(85, 83, 83);'}
        )
    )

    def clean_email(self):
        email = self.cleaned_data["email"]
        is_exist_email = User.objects.filter(email=email).exists()

        if is_exist_email:
            raise forms.ValidationError('کاربری یا این ایمیل وجود دارد')

        return email

    def clean_username(self):
        username = self.cleaned_data["username"]
        is_exist_username = User.objects.filter(username=username).exists()

        if is_exist_username:
            raise forms.ValidationError('این نام کابری قبلا گرفته شده است')
        return username

    def clean_re_password(self):
        password = self.cleaned_data["password"]
        re_password = self.cleaned_data["re_password"]

        if password != re_password:
            raise forms.ValidationError('گذزواژه و تکرار آن مغایرت دارند')
        return re_password


class LoginForm(forms.Form):
    username = forms.CharField(
        widget=forms.TextInput(
            attrs={'placeholder': 'نام کاربری', 'id': 'input', 'class': 'input d-block p-2 mb-3', 'style': 'border-radius: 5px; outline:none; border:1px solid rgb(85, 83, 83);'}
        )
    )

    password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={'placeholder': 'گذرواژه', 'id': 'input', 'class': 'input d-block p-2 mb-3', 'style': 'border-radius: 5px; outline:none; border:1px solid rgb(85, 83, 83);'}
        )
    )

    def clean_username(self):
        username = self.cleaned_data["username"]
        is_exists_user = User.objects.filter(username=username).exists()

        if not is_exists_user:
            raise forms.ValidationError('کاربری با همچین مشخصات یافت نشد!')
        return username
