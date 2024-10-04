from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    quantity = models.IntegerField()

    class Meta:
        db_table = 'product'

    def _str_(self):
        return self.name


class ProductImage(models.Model):
    product = models.ForeignKey(Product,related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')

    class Meta:
        db_table = 'product_image'

    def _str_(self):
        return self.product.name

class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, through='CartItem')

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
