from django.db import models

class Notificacion(models.Model):
    titulo = models.CharField(max_length=120, blank=True, null=True)
    mensaje = models.TextField(blank=True, null=True)
    fecha = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'notificaciones'
