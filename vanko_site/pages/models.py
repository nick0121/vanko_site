from django.db import models
from phone_field import PhoneField

# Create your models here.
class Contact(models.Model):
    f_name = models.CharField(max_length=100)
    l_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone = PhoneField(blank=True)
    message = models.CharField(max_length=200)

    def __str__(self):
        return self.f_name

