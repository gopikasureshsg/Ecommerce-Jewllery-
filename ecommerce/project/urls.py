"""
URL configuration for project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from userapp import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('getProducts/', views.getProducts, name='getProducts'),
    path('getProduct/<str:pk>/', views.getProduct, name='getProduct'),
    path('createProduct/', views.createProduct, name='createProduct'),
    path('updateProduct/<str:pk>/', views.updateProduct, name='updateProduct'),
    path('deleteProduct/<str:pk>/', views.deleteProduct, name='deleteProduct'),
    path('api/login/', views.LoginView.as_view()),
    path('api/user/', views.UserProfileView.as_view()),
    path('api/signup/', views.signup),
    path('api/cart/', views.AddToCartView.as_view()),
    path('api/cart/<str:pk>/', views.ViewCartView.as_view()),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
