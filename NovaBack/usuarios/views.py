from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Usuario
from .serializers import UsuarioCreateSerializer, UsuarioSerializer

# Create your views here.
class UsuarioAPIView(APIView):

    def post(self, request):
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class UsuarioCreateAPIView(APIView):

    def post(self, request):
        serializer = UsuarioCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
