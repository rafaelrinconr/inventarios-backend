# Version de node que se va instalar y ejecutar.
FROM node:16

# Crea la ruta (basado en directorio LINUX), en la que va a pegar el proyecto.
WORKDIR /usr/src/app

# copia el package.json
COPY package*.json ./

# Descarga las librerias la proyecto.
RUN npm install

# copia todo el contenido del proyecto en el directorio.
COPY . .

# Se indica el puerto por donde funciona la aplicación. Debe ser igual a la variable de entorno.
EXPOSE 4000

# Sentencia para ejecutar la aplicación
CMD [ "node", "index.js" ]