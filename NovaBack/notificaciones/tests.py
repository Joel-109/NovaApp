from django.test import TestCase
from notificaciones.models import Notificacion


class NotificacionTest(TestCase):

    def test_crear_notificacion_con_titulo_y_mensaje(self):
        # Arrange
        titulo = "Alerta"
        mensaje = "Tu presupuesto se agotó"

        # Act
        notif = Notificacion.objects.create(
            titulo=titulo,
            mensaje=mensaje
        )

        # Assert
        self.assertEqual(notif.titulo, titulo)
        self.assertEqual(notif.mensaje, mensaje)


    def test_fecha_se_asigna_automaticamente(self):
        # Arrange
        # (no hay preparación necesaria)

        # Act
        notif = Notificacion.objects.create()

        # Assert
        self.assertIsNotNone(notif.fecha)


    def test_guardar_mensaje(self):
        # Arrange
        mensaje = "Hola usuario"

        # Act
        notif = Notificacion.objects.create(mensaje=mensaje)

        # Assert
        self.assertEqual(notif.mensaje, mensaje)
