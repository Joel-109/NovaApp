FROM python:3.13-slim

# Crear carpeta de trabajo
WORKDIR /app

# Copiar requirements e instalar dependencias
COPY NovaBack/requirements.txt .

RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copiar el resto del proyecto
COPY NovaBack/ .

# Exponer puerto
EXPOSE 8000

# Comando de ejecución (Django dev server)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
