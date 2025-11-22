from django.db import models
from django.core.validators import MinValueValidator
from usuarios.models import Usuario
# Create your models here.
class Transaccion(models.Model):
    
    def save(self, *args, **kwargs):
        self.full_clean()  # ← activa validadores
        super().save(*args, **kwargs)

    usuario = models.ForeignKey(Usuario,on_delete=models.CASCADE,
        related_name='transacciones')
    concepto = models.CharField(max_length=200)
    monto = models.DecimalField(max_digits=12, decimal_places=2,validators=[MinValueValidator(0)])
    fecha = models.DateTimeField(auto_now_add=True)
    notas = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    