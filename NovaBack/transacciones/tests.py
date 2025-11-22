from django.forms import ValidationError
from django.test import TestCase
from .models import Transaccion
from usuarios.models import Usuario
# Create your tests here.

class TransaccionTestCase(TestCase):

    def test_crear_transaccion(self):
        datos_usuario = {
            "username": "juan123",
            "password": "password_seguro",
            "email": "juan@example.com",
            "telefono": "555123456",
            "presupuesto_mensual": 1500.50,
        }

        user = Usuario.objects.create(
            username = datos_usuario['username'],
            password = datos_usuario['password'],
            email = datos_usuario['email'],
            telefono = datos_usuario['telefono'],
            presupuesto_mensual = datos_usuario['presupuesto_mensual']
        )

        Transaccion.objects.create(
            usuario = user,
            concepto="Pago Universidad",
            monto = 1000,
            notas = "Pago de la matrícula, del semestre 7"
        )

        self.assertTrue(Transaccion.objects.exists())



    def test_verificar_nombre_usuario_transaccion(self):
        datos_usuario = {
            "username": "pablomillar",
            "password": "jamaica904",
            "email": "pablomi2@example.com",
            "telefono": "425396521",
            "presupuesto_mensual": 2030.10,
        }

        user = Usuario.objects.create(
            username = datos_usuario['username'],
            password = datos_usuario['password'],
            email = datos_usuario['email'],
            telefono = datos_usuario['telefono'],
            presupuesto_mensual = datos_usuario['presupuesto_mensual']
        )

        Transaccion.objects.create(
            usuario = user,
            concepto="Pago Universidad",
            monto = 1000,
            notas = "Pago de la matrícula, del semestre 7"
        )

        self.assertEqual(Transaccion.objects.all()[0].usuario.username ,user.username)

    
    def test_verificar_error_valor_negativo(self):
        datos_usuario = {
            "username": "pablomillar",
            "password": "jamaica904",
            "email": "pablomi2@example.com",
            "telefono": "425396521",
            "presupuesto_mensual": 2030.10,
        }

        user = Usuario.objects.create(
            username = datos_usuario['username'],
            password = datos_usuario['password'],
            email = datos_usuario['email'],
            telefono = datos_usuario['telefono'],
            presupuesto_mensual = datos_usuario['presupuesto_mensual']
        )

        with self.assertRaises(ValidationError):
            Transaccion.objects.create(
                usuario = user ,
                concepto="Pago Universidad",
                monto = -1000,
                notas = "Pago de la matrícula, del semestre 7"
            )



'''
def save(self, *args, **kwargs):
        self.full_clean()  # ← activa validadores
        super().save(*args, **kwargs)

    concepto = models.CharField(max_length=200)
    monto = models.DecimalField(max_digits=12, decimal_places=2)
    fecha = models.DateTimeField(auto_now_add=True)
    notas = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
'''