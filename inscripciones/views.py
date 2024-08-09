from rest_framework import viewsets
from .serializer import AlumnoSerializer, PadreTutorSerializer
from .models import Alumno, PadreTutor

class AlumnoView(viewsets.ModelViewSet):
    serializer_class = AlumnoSerializer
    queryset = Alumno.objects.all()

class PadreTutorView(viewsets.ModelViewSet):
    serializer_class = PadreTutorSerializer
    queryset = PadreTutor.objects.all()
