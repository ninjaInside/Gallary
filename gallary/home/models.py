from django.db import models

# Create your models here.
class Place(models.Model):
    name = models.CharField('Название места', unique=True, max_length=10)
    url = models.URLField('Ссылка на google maps', max_length=500)
    text = models.TextField('Описание места', max_length=450,
            help_text='Максимальная длина: 450 символов')
    image = models.ImageField('Изображение места')

    def __str__(self):
        return str(self.name)

    class Meta:
        verbose_name = 'Место'
        verbose_name_plural = 'Места'
