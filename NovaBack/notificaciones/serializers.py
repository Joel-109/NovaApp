from rest_framework import serializers
from notificaciones.models import Notificacion

class NotificacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notificacion
        fields = [
            'id',
            'titulo',
            'mensaje', 
            'fecha'
        ]
        read_only_fields = ['id', 'fecha']

class NotificacionCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notificacion
        fields = ['titulo', 'mensaje']