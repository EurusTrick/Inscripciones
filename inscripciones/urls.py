from django.urls import path, include
from rest_framework import routers
from inscripciones import views

#api versioning
router = routers.DefaultRouter()
router.register(r'alumno', views.AlumnoView, 'alumno')

urlpatterns = [
    path('api/v1/', include(router.urls)),
]

