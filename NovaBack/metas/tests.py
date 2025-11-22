from django.forms import ValidationError
from django.test import TestCase
from .models import Meta, AporteMeta
from usuarios.models import Usuario
# Create your tests here.


class MetaTestCase(TestCase):

    def test_crear_meta(self):

        user = Usuario.objects.create(
            username = "Joel",
            password = '1234',
            telefono = '3059827384',
            presupuesto_mensual = 100000
        )
        Meta.objects.create(
            usuario = user,
            nombre = 'Licuadora',
            meta_monto = 10000,
            ahorro_actual = 1000,
            tiempo_estimado = '1 año',
            fecha_objetivo = '2025-02-15',
            imagen = 'imagen.com'
        )

        self.assertEqual(Meta.objects.all()[0].nombre, 'Licuadora')


    def test_longitud_metas(self):

        user = Usuario.objects.create(
            username = "Dayana",
            password = 'Gat0s',
            telefono = '3654427384',
            presupuesto_mensual = 100000
        )

        Meta.objects.create(
            usuario = user,
            nombre = 'Comprar Moto',
            meta_monto = 10000,
            ahorro_actual = 10000,
            tiempo_estimado = '1 año',
            fecha_objetivo = '2026-12-15',
            imagen = 'imagen.com',
        )

        Meta.objects.create(
            usuario = user,
            nombre = 'Viaje a Paris',
            meta_monto = 12000,
            ahorro_actual = 1300,
            tiempo_estimado = '3 año',
            fecha_objetivo = '2026-03-30',
            imagen = 'imagen.com',
        )

        self.assertEqual(len(Meta.objects.all()),2)

    def test_monto_invalido(self):
        user = Usuario.objects.create(
            username = "Victor",
            password = 'MiViajeFavorito',
            telefono = '3514027384',
            presupuesto_mensual = 140000
        )

        with self.assertRaises(ValidationError):
            Meta.objects.create(
                usuario=user,
                nombre='Comprar Moto',
                meta_monto=-10000,  
                ahorro_actual=10000,
                tiempo_estimado='1 año',
                fecha_objetivo='2026-12-15',
                imagen='imagen.com',
            )



