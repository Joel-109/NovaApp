from rest_framework import viewsets, permissions
from .models import Transaccion
from .serializers import TransaccionSerializer, TransaccionCreateSerializer

class TransaccionViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    
    def get_serializer_class(self):
        if self.action == 'create':
            return TransaccionCreateSerializer
        return TransaccionSerializer
    
    def get_queryset(self):
        return Transaccion.objects.filter(usuario=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)