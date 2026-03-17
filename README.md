# Blog Personal con Flask

Este proyecto es un blog web desarrollado con Flask, un framework ligero de Python. Permite a los usuarios registrados crear, 
editar y publicar posts de manera segura, mientras que los visitantes pueden explorar blogs públicos. Es ideal para bloggers 
individuales o comunidades pequeñas que buscan una plataforma simple y personalizable.

## Características Principales

- **Autenticación de Usuarios**: Registro, inicio de sesión, restablecimiento de contraseña y gestión de sesiones seguras.
- **Gestión de Posts**: Crear, editar, eliminar y visualizar posts con soporte para contenido rico.
- **Vista Pública**: Explorar blogs de otros usuarios sin necesidad de autenticación.
- **Base de Datos**: Integración con SQLAlchemy para persistencia de datos, incluyendo migraciones automáticas.
- **Interfaz de Usuario**: Templates HTML con estilos CSS personalizados y JavaScript para una experiencia interactiva.
- **Seguridad**: Protección contra ataques comunes (CSRF, etc.) mediante Flask-WTF y otras extensiones.

## Tecnologías Utilizadas

- **Backend**: Python 3.11, Flask 3.1.3
- **Base de Datos**: SQLAlchemy 2.0.48 con Flask-Migrate para migraciones
- **Autenticación**: Flask-Login 0.6.3
- **Formularios**: Flask-WTF 1.2.2 con WTForms 3.2.1
- **Frontend**: HTML, CSS (estilos personalizados), JavaScript
- **Otros**: Jinja2 para templates, Werkzeug para utilidades web

## Instalación y Configuración

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio

2. Crea y activa un entorno virtual:

  python -m venv env
  env\Scripts\activate  # En Windows
  # source env/bin/activate  # En macOS/Linux

3. Instala dependencias:

   pip install -r requirements.txt

  (Asegúrate de que el archivo requirements.txt esté presente; si no, genera uno con pip freeze > requirements.txt).

4. Configura la base de datos

  -Edita config.py para ajustar la configuración de la base de datos (por defecto, usa SQLite).
  -Ejecuta las migraciones:

  flask db upgrade

5. Ejecuta la app

  flask run
  Accede a http://127.0.0.1:5000 en tu navegador.

## Uso

  -Registro/Login: Crea una cuenta o inicia sesión para acceder a funciones de blogger.
  -Crear Posts: Desde el panel de usuario, agrega nuevos posts con título y contenido.
  -Editar/Eliminar: Modifica o borra tus posts existentes.
  -Vista Pública: Navega por blogs de otros usuarios sin autenticación.

## Estructura del Proyecto
  
  -app.py: Punto de entrada principal de la aplicación.
  -models.py: Definición de modelos de base de datos (usuarios, posts, etc.).
  -forms.py: Formularios para autenticación y posts.
  -config.py: Configuraciones de la app.
  -auth, main, post, public: Módulos de rutas para diferentes secciones.
  -templates: Plantillas HTML.
  -static: Archivos estáticos (CSS, JS, imágenes).
  -migrations: Scripts de migración de base de datos.

## Notas Adicionales
  Asegúrate de que el archivo .gitignore incluya env para ignorar el entorno virtual en Git.
  Para desarrollo, instala extensiones adicionales si es necesario (ej. pip install flask-debugtoolbar).
  Si encuentras errores, verifica los logs de Flask o usa herramientas de depuración.










  
