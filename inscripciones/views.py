from rest_framework import viewsets
from .serializer import AlumnoSerializer, PadreTutorSerializer, PagoSerializer, InscripcionSerializer
from .models import Alumno, PadreTutor, Pago, Inscripcion

class AlumnoView(viewsets.ModelViewSet):
    serializer_class = AlumnoSerializer
    queryset = Alumno.objects.all()

class PadreTutorView(viewsets.ModelViewSet):
    serializer_class = PadreTutorSerializer
    queryset = PadreTutor.objects.all()
    
class PagoView(viewsets.ModelViewSet):
    serializer_class = PagoSerializer
    queryset = Pago.objects.all()

class InscripcionView(viewsets.ModelViewSet):
    serializer_class = InscripcionSerializer
    queryset = Inscripcion.objects.all()


