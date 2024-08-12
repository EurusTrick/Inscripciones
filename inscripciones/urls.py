from django.urls import path, include
from rest_framework import routers
from inscripciones import views
#from rest_framework.documentation import include_docs_urls

#api versioning
router = routers.DefaultRouter()
router.register(r'alumno', views.AlumnoView, 'alumno')
router.register(r'padretutor', views.PadreTutorView, 'padretutor')
router.register(r'pago', views.PagoView, 'pago')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    #path('docs/', include_docs_urls(title='API')),
]

 