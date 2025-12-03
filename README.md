# Premium Vastgoed Leadgen Website

Een luxe single-page website voor vastgoed leadgeneratie, gebouwd met Next.js 14, TypeScript en custom CSS.

## Features

- 🎨 **Premium Design**: Custom charcoal/gold thema met Playfair Display & Inter fonts.
- 📱 **Volledig Responsive**: Mobile-first aanpak.
- ✨ **Animaties**: Smooth scroll, parallax hero, en fade-in effecten.
- 📝 **Lead Form**: Geïntegreerd contactformulier.
- 🤖 **Telegram Integratie**: Directe meldingen van nieuwe leads via Telegram Bot API.

## Installatie

1.  Installeer dependencies:
    ```bash
    npm install
    ```

2.  Maak een `.env.local` bestand aan in de root directory met je Telegram gegevens:
    ```env
    TELEGRAM_BOT_TOKEN=jouw_bot_token_hier
    TELEGRAM_CHAT_ID=jouw_chat_id_hier
    ```

    > **Hoe aanmaken?**
    > 1. Start een chat met `@BotFather` op Telegram om een nieuwe bot te maken en een token te krijgen.
    > 2. Start een chat met je nieuwe bot of voeg hem toe aan een groep.
    > 3. Haal je Chat ID op (bijv. via `@userinfobot` of door de API te callen).

3.  Start de development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in je browser.

## Structuur

- `app/page.tsx`: Hoofdpagina die alle secties samenvoegt.
- `app/components/`: Reusable UI componenten (Hero, Services, etc.).
- `app/globals.css`: Global styles, CSS variabelen en utilities.
- `app/api/contact/`: API route voor form submission handling.

## Deploy

Deze applicatie is klaar voor deployment op Vercel. Zorg dat je de Environment Variables ook daar instelt.


