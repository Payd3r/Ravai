FROM node:20-alpine

WORKDIR /app

COPY server/package*.json ./
RUN npm ci --omit=dev

COPY server/ .

# Loghi per PDF preventivo
COPY public/1.png ./public/1.png
COPY public/logo.png ./public/logo.png

EXPOSE 3000

CMD ["node", "index.js"]
