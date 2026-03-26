# Integrazione Invio Preventivi da Sito a Scraper

Questa documentazione spiega come configurare il sito principale (es. `ravai.it`) per inviare i preventivi passando attraverso il backend dello Scraper.
In questo modo, lo scraper terrà traccia della "storia" dell'email, di chi ha aperto la mail ed eviterà di separare i flussi.

## Endpoint API

Lo scraper espone una nuova rotta per la ricezione dei preventivi:

**URL Endpoint:** `POST /api/quotes/send`  
(L'URL completo dipenderà da dove esponi il backend dello scraper, es: `https://scraper.tuodominio.it/api/quotes/send`)

La richiesta **deve** essere inviata come **`multipart/form-data`** per permettere il caricamento del file PDF in allegato.

### Parametri Supportati (Form Data):
*   **`email`** (Obbligatorio): L'indirizzo e-mail del destinatario (il cliente).
*   **`name`** (Opzionale): Il nome del cliente.
*   **`subject`** (Opzionale): L'oggetto dell'e-mail. Valore predefinito: *"Il tuo preventivo RAVAI"*.
*   **`body`** (Opzionale): Il corpo dell'e-mail. Puoi inviare anche tag HTML se vuoi che vengano formattati. Valore predefinito: *"Ciao, in allegato il preventivo."*.
*   **`file`** (Opzionale, ma raccomandato): Il file fisico (solitamente un PDF) da allegare alla mail. Verrà anche salvato nello storico con copia locale.

## Esempio di implementazione su sito React / Frontend in JavaScript

Per chiamare l'API direttamente dal tuo frontend React (o da un tuo backend Node.js), puoi utilizzare `fetch` o `axios` creando un oggetto `FormData` per gestire correttamente il file e i campi testuali:

```javascript
// Esempio utilizzando la Fetch API nativa
async function inviaPreventivoScraper(email, nome, filePreventivo) {
    const url = 'https://scraperback.andrea-mauri.duckdns.org/api/quotes/send';
    
    // Inizializza l'oggetto FormData
    const formData = new FormData();
    
    // Aggiungi i campi testuali
    formData.append('email', email);
    formData.append('name', nome);
    formData.append('subject', 'Il tuo preventivo RAVAI');
    formData.append('body', `Ciao ${nome},<br>ti ringraziamo per averci contattato. In allegato trovi il tuo preventivo in formato PDF.`);
    
    // Aggiungi il file (l'oggetto File proveniente dall'input type="file" o da un Blob generato)
    if (filePreventivo) {
        formData.append('file', filePreventivo);
    }
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData, // Non impostare il Content-Type, fetch lo deduce da FormData e imposta il boundary corretto
        });
        
        const result = await response.json();
        
        if (response.ok && result.status === 'success') {
            console.log("Preventivo inviato con successo:", result.message);
            return true;
        } else {
            console.error("Errore Invio Preventivo tramite Scraper:", result);
            return false;
        }
    } catch (error) {
        console.error("Errore di rete o chiamata API API Fallita:", error);
        return false;
    }
}

// Utilizzo:
// const fileInput = document.getElementById('tuoInputFile');
// const file = fileInput.files[0]; 
// In React, avresti il File obj nello state dal tuo onChange o direttamente dalla funzione di generazione PDF.
// inviaPreventivoScraper('cliente@esempio.com', 'Mario Rossi', file);
```

### Funzionamento
1. Il sito in React invia i dati compilati e l'oggetto `File` (o `Blob`) all'API.
2. Il Backend dello Scraper prende il file e lo salva temporaneamente (o definitivamente) nella cartella interna `data/quotes/`.
3. Compone un'e-mail utilizzando lo stesso relay SMTP già configurato per il cold email (Brevo) iniettando i tracking ID.
4. Allega il file PDF.
5. Registra l'operazione nel nuovo "Storico Preventivi".
6. Le visualizzazioni (Aperture e Click) verranno tracciate e mostrate nell'apposita scheda dell'applicazione Scraper.
