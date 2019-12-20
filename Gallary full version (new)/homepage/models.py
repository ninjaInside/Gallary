from django.db import models

# Create your models here.
class Place(models.Model):
    name = models.CharField(max_length=10, unique=True)
    discription = models.TextField()
    image = models.ImageField()

    def __str__(self):
        return str(self.name)

    class Meta:
        verbose_name = 'Места'
        verbose_name_plural = 'Место'
