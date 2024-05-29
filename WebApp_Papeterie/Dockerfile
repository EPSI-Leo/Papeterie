FROM node:alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM nginx:alpine-slim
COPY ./docker/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/angular_project /usr/share/nginx/html/
