from rest_framework import serializers
from .models import Alumno
from .models import PadreTutor

class AlumnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumno
        fields = '__all__'

class PadreTutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = PadreTutor
        fields = '__all__'
    


