from django.db import models

class Alumno(models.Model):
    nombre = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    fecha_nacimiento = models.DateField()
    direccion = models.TextField()
    email = models.EmailField()
    telefono = models.CharField(max_length=10)

    def __str__(self):
        return self.apellidos + ' ' + self.nombre
    
class PadreTutor(models.Model):
    nombre = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    email = models.EmailField()
    telefono = models.CharField(max_length=10)

    def __str__(self):
        return self.nombre + ' ' + self.apellidos
    



    