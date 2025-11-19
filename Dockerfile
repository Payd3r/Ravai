# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
# --no-audit e --no-fund per velocizzare la build
RUN npm ci --no-audit --no-fund

# Copy source code
COPY . .

# Build l'app (le immagini possono essere ottimizzate localmente se necessario)
RUN npm run build

# Production stage
FROM nginx:alpine

# Installa wget per healthcheck
RUN apk add --no-cache wget

# Copy built app from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Verifica che i file siano stati copiati correttamente
RUN ls -la /usr/share/nginx/html && \
    test -f /usr/share/nginx/html/index.html || (echo "ERRORE: index.html non trovato!" && exit 1)

# Rimuovi la configurazione di default di nginx
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Verifica la configurazione nginx
RUN nginx -t

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/health || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]