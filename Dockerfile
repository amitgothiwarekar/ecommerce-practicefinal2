# Build stage using Node 24
FROM node:24 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Serve stage using Nginx
FROM nginx:alpine
# Static files built by Angular are copied to Nginx web root
COPY --from=build /app/dist/ecommerce-practicefinal2/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]