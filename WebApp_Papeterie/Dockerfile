FROM node:alpine as build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
FROM nginx:alpine-slim
COPY --from=build /app/dist/angular_project /usr/share/nginx/html/
