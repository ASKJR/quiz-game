# build environment
FROM node:12.2.0-alpine as build
WORKDIR /app

COPY package*.json ./
RUN npm install --silent
COPY . /app
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
# Base system dependencies
RUN apk add --no-cache \
    curl \
    git \
    bash \
    nano

RUN apk upgrade libssl1.0 --update-cache
RUN apk add wget ca-certificates
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]