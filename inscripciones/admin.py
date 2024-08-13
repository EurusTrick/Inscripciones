from django.contrib import admin
from .models import Alumno, PadreTutor, Pago, Inscripcion


admin.site.register(Alumno)
admin.site.register(PadreTutor)
admin.site.register(Pago)
admin.site.register(Inscripcion)

