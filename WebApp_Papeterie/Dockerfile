# Utilisation de l'image Node.js Alpine
FROM node:alpine as build

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers du projet dans le conteneur
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Construction de l'application
RUN npm run build --prod

# Deuxième étape pour servir l'application construite
FROM nginx:alpine

# Copie des fichiers construits de la première étape dans le conteneur NGINX
COPY --from=build /app/dist/* /usr/share/nginx/html/

# Set the environment variable PORT to 80
ENV PORT 80

# Make port 80 available for links and/or publish
EXPOSE 80

# Commande pour démarrer NGINX
CMD ["nginx", "-g", "daemon off;"]