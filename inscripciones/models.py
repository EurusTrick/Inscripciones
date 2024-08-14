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
    alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE, related_name='padres', null=True, blank=True)

    def __str__(self):
        return self.nombre + ' ' + self.apellidos
    

class Pago(models.Model):
    alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE, related_name='pagos')
    fecha_pago = models.DateField()
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    metodo_pago = models.CharField(max_length=50)

    def __str__(self):
        return self.alumno.apellidos + ' ' + self.alumno.nombre + ' - ' + str(self.fecha_pago)


class Inscripcion(models.Model):
    alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE, related_name='inscripciones')
    pago = models.ForeignKey(Pago, on_delete=models.CASCADE)
    factura = models.BooleanField(default=False)
    curso = models.CharField(max_length=50)
    tipo_inscripcion = models.CharField(max_length=50)

    def __str__(self):
        return self.alumno.apellidos + ' ' + self.alumno.nombre + ' - ' + self.curso

