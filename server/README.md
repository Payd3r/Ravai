# Backend RAVAI - Invio Preventivi

## Variabili d'ambiente

Configura le seguenti variabili nel file `.env` nella root del progetto (per docker-compose) o quando deployi:

| Variabile | Descrizione | Esempio |
|-----------|-------------|---------|
| `SMTP_HOST` | Server SMTP Aruba | `smtps.aruba.it` |
| `SMTP_PORT` | Porta SMTP (SSL) | `465` |
| `SMTP_USER` | Email di invio | `info@ravai.it` |
| `SMTP_PASS` | Password email Aruba | *(inserisci tu)* |
| `CORS_ORIGIN` | Origine consentita (opzionale) | `https://ravai.it` |
| `PORT` | Porta del server (default 3000) | `3000` |

## Docker Compose

Il backend è incluso in `docker-compose.yml` nella root. Crea un file `.env` con:

```
SMTP_PASS=tua_password_aruba
CORS_ORIGIN=https://ravai.it
```

Poi:

```bash
docker compose up -d
```

## Proxy reverso sul server Ubuntu

Configura nginx (o traefik) per inoltrare le richieste `/api/*` al container `ravai_backend` sulla porta 3000. Esempio nginx:

```nginx
location /api/ {
    proxy_pass http://localhost:3000/;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}
```
