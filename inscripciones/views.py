from rest_framework import viewsets
from .serializer import AlumnoSerializer
from .models import Alumno

class AlumnoView(viewsets.ModelViewSet):
    serializer_class = AlumnoSerializer
    queryset = Alumno.objects.all()