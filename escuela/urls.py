from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('alumnos/', include('inscripciones.urls')),
    path('tutores/', include('inscripciones.urls')), 
    path('pagos/', include('inscripciones.urls')),
]
