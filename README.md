Pasos para Ejecutar el Proyecto

1. Configurar la Base de Datos:

- Abre Laragon y asegúrate que MySQL esté corriendo
- Abre phpMyAdmin (http://localhost/phpmyadmin)
- Crea una nueva base de datos llamada "sistema_productos"
- Importa el archivo server/database.sql para crear la tabla

2. Configurar el Backend:

# Navega al directorio del back
cd sistema-productos/back

# Instala las dependencias
npm install

# Configura las variables de entorno
# Edita el archivo .env con tus credenciales de MySQL:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=     # Déjalo vacío si no tienes contraseña en Laragon
DB_NAME=sistema_productos
PORT=3000

# Inicia el servidor
npm run dev

3. Configurar el Frontend:

# En otra terminal, navega al directorio del cliente
cd sistema-productos/front

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev

4. Acceder a la Aplicación:

- Backend API: http://localhost:3000
- Frontend: http://localhost:5173