FROM node:alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine-slim
COPY --from=build /app/dist/angular_project /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# FROM node:alpine
# HEALTHCHECK --interval=1m --timeout=10s \
#   CMD wget -q -O - http://localhost:80 || exit 1
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# CMD ["npm", "run", "docker"]
