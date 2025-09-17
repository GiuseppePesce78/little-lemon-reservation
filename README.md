# 🍋 Little Lemon - Capstone Project

Questo progetto è stato sviluppato come prova d'esame finale per il conseguimento del  
**Meta Front-End Developer Professional Certificate** su [Coursera](https://www.coursera.org/professional-certificates/meta-front-end-developer).

Si tratta di una web app moderna per la gestione delle prenotazioni e la presentazione del menu del ristorante **Lemon**, realizzata con **React**, **Vite** e **Tailwind CSS**.  
L’obiettivo era applicare in un progetto reale le competenze acquisite durante il percorso, con focus su **usabilità, responsive design e validazione dei form**.

---

<img src="https://github.com/GiuseppePesce78/little-lemon-reservation/blob/readme-structure/src/assets/readme-cover.jpg" alt="Website Screenshot">

## 🏡 Cos'è Little Lemon?

**Little Lemon** è un progetto didattico che simula il sito web di un ristorante.  
L’obiettivo principale è stato realizzare un’applicazione front-end che permetta agli utenti di:

- effettuare una **prenotazione** attraverso un form con validazioni,
- interagire con un’interfaccia **responsive** e ottimizzata per mobile,
- sperimentare un flusso utente realistico in linea con i requisiti di un ristorante moderno.

Il progetto non è un prodotto commerciale ma una **capstone project application**, pensata per dimostrare competenze pratiche in **React, gestione dello stato, validazioni dei form e responsive design**.

> **View demo:** [Little Lemon Restaurant]()

### 📂 Struttura del progetto

```bash
src/
├── App.css                        # Stili principali dell’app
├── App.tsx                        # Componente root dell’app
├── index.css                      # Stili globali
├── main.tsx                       # Entry point dell’app
├── setupTests.ts                  # Configurazione test
├── vite-env.d.ts                  # Tipi TypeScript per Vite
├── assets/                        # Immagini e file statici
├── components/                    # Componenti React riutilizzabili
│   ├── global/                    # Componenti globali (Header, Footer, Nav)
│   ├── pages/                     # Componenti specifici delle pagine
│   │   ├── booking/               # Componenti per la pagina di prenotazione
│   │   └── homepage/              # Componenti per la homepage
│   └── ui/                        # Primitive UI (button, form, input, card, ecc.)
├── layouts/                       # Layout principali (MainLayout)
├── lib/                           # Funzioni helper e validazioni (es. booking form)
└── pages/                         # Pagine dell’app gestite da routing
   ├── booking/                    # Pagina prenotazione
   ├── booking-confirmation/       # Pagina conferma prenotazione
   └── home/                       # Pagina home

```

#### Descrizioni sintetiche delle cartelle principali

- **assets/** → immagini e file statici usati nell’app.
- **components/** → componenti React riutilizzabili, organizzati in `global`, `pages` e `ui`.
- **layouts/** → layout principali dell’app (es. MainLayout).
- **lib/** → logica di supporto, come validazioni dei form e funzioni helper.
- **pages/** → pagine principali del routing (`/booking`, `/booking-confirmation`, `/home`).
- **file root** → entry point e configurazioni principali (`App.tsx`, `main.tsx`, `index.css`, `setupTests.ts`, `vite-env.d.ts`).

## Features

- 📅 **Sistema di prenotazione**: consente agli utenti di selezionare data e orario, con validazioni avanzate tramite Zod.
- 🍽️ **Menu dinamico e responsive**: visualizzazione dei piatti suddivisi per categorie, ottimizzata per desktop e dispositivi mobili.
- 🎨 **UI moderna e coerente**: sviluppo di componenti riutilizzabili con Tailwind CSS e shadcn/ui.
- 📱 **Responsive design**: layout adattivo per smartphone, tablet e desktop.
- ⚡ **Performance ottimizzate**: grazie a React e Vite, caricamento rapido e esperienza utente fluida.
- 🧪 **Testing**: configurazione di test base con `setupTests.ts` per garantire la stabilità dei componenti critici.

## 🛠️ Tech Stack

- [React](https://reactjs.org/) – Libreria principale per creare componenti riutilizzabili e gestire lo stato dell’interfaccia utente.
- [Vite](https://vitejs.dev/) – Bundler e tool di sviluppo veloce, con hot-reload e build ottimizzate.
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework per uno stile moderno e responsive.
- [shadcn/ui](https://ui.shadcn.com/) – Libreria di componenti UI pronta all’uso, impiegata per velocizzare lo sviluppo di elementi comuni come button, card e sheet.
- [Zod](https://zod.dev/) – Libreria per le **validazioni dei form**, usata per garantire che gli input delle prenotazioni rispettino regole di formato e coerenza.

## Componenti e Validazioni

### shadcn/ui

Per l’interfaccia utente sono stati utilizzati i componenti di **shadcn/ui**, che hanno permesso di creare rapidamente elementi riutilizzabili e coerenti con lo stile dell’app.  
Alcuni esempi di utilizzo:

- **Button**, **Card**, **Sheet** e altri componenti UI personalizzabili.
- Composizione modulare dei componenti per la homepage e il form di prenotazione.
- Facilita il mantenimento di uno stile coerente e responsive in tutto il progetto.

### Zod

Per la gestione dei form e la validazione dei dati è stata utilizzata **Zod**, che ha permesso di:

- Definire **schemi di validazione** chiari e riutilizzabili per ogni form.
- Controllare che gli utenti inseriscano dati coerenti, come date e orari validi per le prenotazioni.
- Integrare facilmente la validazione con React e i componenti del form, mostrando messaggi di errore in tempo reale.

## Getting Started

Segui le istruzioni per avviare il tuo progetto

### Run locally

1. **Clona la repository**
   ```bash
   git clone https://github.com/GiuseppePesce78/little-lemon-reservation.git
   ```
2. **Installa le dipendenze**

   ```bash
    npm install
   ```

3. **Avvia il server di**
   ```bash
   npm run dev
   ```

Appena avviata, l'app sarà disponibile su [http://localhost:5173](http://localhost:5173)
