FROM python:3.13-slim

WORKDIR /app

# Copiar requirements desde NovaBack/
COPY NovaBack/requirements.txt .

# Instalar dependencias
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copiamos TODO el proyecto
COPY . .

EXPOSE 8000

CMD ["python", "NovaBack/manage.py", "runserver", "0.0.0.0:8000"]
