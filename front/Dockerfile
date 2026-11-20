# Этап 1: Сборка приложения
FROM node:24-alpine AS builder

WORKDIR /app

# Копируем файлы зависимостей и устанавливаем их
COPY package*.json ./
RUN npm ci

# Копируем исходный код и собираем проект
COPY . .
RUN npm run build

# Этап 2: Раздача статики через Nginx
FROM nginx:alpine

# Если у вас Vite, папка сборки называется dist. 
# Если Create React App — замените /app/dist на /app/build
COPY --from=builder /app/dist /usr/share/nginx/html

# Настройка Nginx для корректной работы React Router (SPA)
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
