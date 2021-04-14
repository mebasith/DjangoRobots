from django.db import models

# Create your models here.
class Robot(models.Model):
    class FuelTypes(models.TextChoices):
        GAS = 'Gas'
        DIESEL = 'Diesel'
        ELECTRIC = 'Electric'


    name = models.CharField(max_length=50)
    fuelType = models.CharField(max_length=50, choices=FuelTypes.choices) 
    fuelLevel = models.IntegerField(default=100)
