FROM python:3.13-slim

# Crear directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar requirements desde la raíz del repo
COPY requirements.txt .

# Instalar dependencias
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copiar TODO el proyecto al contenedor
COPY . .

# Exponer el puerto de Django
EXPOSE 8000

# Ejecutar Django (manage.py está en NovaBack/)
CMD ["python", "NovaBack/manage.py", "runserver", "0.0.0.0:8000"]
