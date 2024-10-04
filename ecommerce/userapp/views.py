from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Product
from .serializer import ProductSerializer
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Product, Cart, CartItem
from .serializer import CartSerializer


class AddToCartView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        product_id = request.data.get('product_id')
        quantity = request.data.get('quantity', 1)

        try:
            product = Product.objects.get(id=product_id)
            cart, created = Cart.objects.get_or_create(user=request.user)
            cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)

            cart_item.quantity += quantity
            cart_item.save()

            return Response({'success': 'Product added to cart!'}, status=status.HTTP_201_CREATED)
        except Product.DoesNotExist:
            return Response({'error': 'Product not found!'}, status=status.HTTP_404_NOT_FOUND)

class ViewCartView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        try:
            cart = Cart.objects.get(user=request.user)
            serializer = CartSerializer(cart)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Cart.DoesNotExist:
            return Response({'error': 'Cart not found!'}, status=status.HTTP_404_NOT_FOUND)


class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        data = {
            'username': user.username,
            'email': user.email,
            # Add any other user fields you want to return
        }
        return Response(data)


class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            # Get the user by email
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)

        # Authenticate user
        if user.check_password(password):
            token = AccessToken.for_user(user)
            return Response({'token': str(token)}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)
@api_view(['POST'])
def signup(request):
    if request.method == 'POST':
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists.'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()
        return Response({'success': 'User created successfully!'}, status=status.HTTP_201_CREATED)
@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createProduct(request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

@api_view(['DELETE'])
def deleteProduct(request, pk):
    try:
        product = Product.objects.get(id=pk)
        product.delete()
        return Response('deleted')
    except:
        return Response('not deleted')

@api_view(['PUT'])
def updateProduct(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(instance=product, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)
