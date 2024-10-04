from rest_framework import serializers
from .models import Product, ProductImage,CartItem, Cart

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image']  # You can add other fields if needed


class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'description', 'quantity', 'images']

class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = CartItem
        fields = ['product', 'quantity']

class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(source='cartitem_set', many=True)

    class Meta:
        model = Cart
        fields = ['user', 'items']