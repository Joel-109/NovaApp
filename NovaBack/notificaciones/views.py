from rest_framework import viewsets, permissions
from notificaciones.models import Notificacion
from .serializers import NotificacionSerializer, NotificacionCreateSerializer

class NotificacionViewSet(viewsets.ModelViewSet):
    queryset = Notificacion.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    
    def get_serializer_class(self):
        if self.action == 'create':
            return NotificacionCreateSerializer
        return NotificacionSerializer