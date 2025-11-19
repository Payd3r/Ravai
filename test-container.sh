#!/bin/bash

echo "=== Test Container Ravai Frontend ==="
echo ""

# Test 1: Verifica che il container sia in esecuzione
echo "1. Verifica container in esecuzione..."
if docker ps | grep -q ravai_frontend; then
    echo "   ✓ Container ravai_frontend è in esecuzione"
else
    echo "   ✗ Container ravai_frontend NON è in esecuzione"
    exit 1
fi

# Test 2: Verifica che nginx risponda all'interno del container
echo ""
echo "2. Test nginx all'interno del container..."
if docker exec ravai_frontend wget -q -O- http://localhost/health 2>/dev/null | grep -q "healthy"; then
    echo "   ✓ Nginx risponde correttamente all'interno del container"
else
    echo "   ✗ Nginx NON risponde all'interno del container"
fi

# Test 3: Verifica che i file siano presenti
echo ""
echo "3. Verifica file presenti..."
if docker exec ravai_frontend test -f /usr/share/nginx/html/index.html; then
    echo "   ✓ index.html presente"
else
    echo "   ✗ index.html NON presente"
fi

# Test 4: Test sulla porta esposta (se disponibile)
echo ""
echo "4. Test sulla porta 8080 (se esposta)..."
if curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/health 2>/dev/null | grep -q "200"; then
    echo "   ✓ Container risponde sulla porta 8080"
    echo "   Prova: curl http://localhost:8080/health"
    echo "   Prova: curl http://localhost:8080/debug"
else
    echo "   ⚠ Porta 8080 non esposta o non raggiungibile"
    echo "   (Questo è normale se stai usando solo il proxy)"
fi

# Test 5: Verifica rete Docker
echo ""
echo "5. Verifica rete Docker..."
if docker network inspect web-proxy >/dev/null 2>&1; then
    echo "   ✓ Rete web-proxy esiste"
    if docker network inspect web-proxy | grep -q ravai_frontend; then
        echo "   ✓ Container è sulla rete web-proxy"
    else
        echo "   ⚠ Container potrebbe non essere sulla rete web-proxy"
    fi
else
    echo "   ✗ Rete web-proxy NON esiste"
    echo "   Crea la rete con: docker network create web-proxy"
fi

# Test 6: Log recenti
echo ""
echo "6. Ultime 10 righe dei log di accesso..."
docker exec ravai_frontend tail -n 10 /var/log/nginx/access.log 2>/dev/null || echo "   (Nessun log di accesso ancora)"

echo ""
echo "7. Ultime 10 righe dei log di errore..."
docker exec ravai_frontend tail -n 10 /var/log/nginx/error.log 2>/dev/null || echo "   (Nessun errore)"

echo ""
echo "=== Fine Test ==="

