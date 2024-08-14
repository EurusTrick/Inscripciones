from rest_framework import serializers
from .models import Alumno
from .models import PadreTutor
from .models import Pago
from .models import Inscripcion

class AlumnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumno
        fields = '__all__'

class PadreTutorSerializer(serializers.ModelSerializer):
    alumno = serializers.PrimaryKeyRelatedField(queryset=Alumno.objects.all())
    alumno_details = serializers.SerializerMethodField()

    class Meta:
        model = PadreTutor
        fields = '__all__'
    
    def get_alumno_details(self, obj):
        return AlumnoSerializer(obj.alumno).data

class PagoSerializer(serializers.ModelSerializer):
    alumno = serializers.PrimaryKeyRelatedField(queryset=Alumno.objects.all())
    alumno_details = serializers.SerializerMethodField()

    class Meta:
        model = Pago
        fields = '__all__'
    
    def get_alumno_details(self, obj):
        return AlumnoSerializer(obj.alumno).data

class InscripcionSerializer(serializers.ModelSerializer):
    alumno = serializers.PrimaryKeyRelatedField(queryset=Alumno.objects.all())
    alumno_details = serializers.SerializerMethodField()
    pago = serializers.PrimaryKeyRelatedField(queryset=Pago.objects.all())
    pago_details = serializers.SerializerMethodField()

    class Meta:
        model = Inscripcion
        fields = '__all__'

    def get_alumno_details(self, obj):
        return AlumnoSerializer(obj.alumno).data

    def get_pago_details(self, obj):
        return PagoSerializer(obj.pago).data
    

    

    


