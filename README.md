# NexXt Level Hypotheken — Website

Statische website voor [nexxtlevelhypotheken.nl](https://nexxtlevelhypotheken.nl), klaar om te hosten op GitHub Pages.

## Inhoud

```
.
├── index.html          # Homepagina
├── diensten.html       # Diensten (Hypotheken, Verzekeringen, Advies)
├── over-ons.html       # Over NexXt Level Hypotheken
├── contact.html        # Contact + formulier + kaart
├── 404.html            # Foutpagina
├── assets/
│   └── logo.svg        # Het nieuwe NexXt Level Hypotheken-logo
├── css/
│   └── styles.css      # Styling
├── js/
│   └── script.js       # Interactie & animaties
└── README.md
```

## Lokaal bekijken

Geen build-stap nodig. Open simpelweg `index.html` in een browser, of start een lokale webserver:

```bash
# Python 3
python3 -m http.server 8000

# Of met Node
npx serve .
```

Bezoek vervolgens `http://localhost:8000`.

## Publiceren op GitHub Pages

1. Maak een nieuwe repository op GitHub (bijv. `nexxtlevelhypotheken`).
2. Push deze bestanden naar de `main`-branch:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<jouw-gebruikersnaam>/nexxtlevelhypotheken.git
   git push -u origin main
   ```

3. Ga in de repository naar **Settings → Pages**.
4. Selecteer onder **Source** de branch `main` en de map `/ (root)`. Klik op **Save**.
5. Na enkele seconden is de site live op `https://<jouw-gebruikersnaam>.github.io/nexxtlevelhypotheken/`.

### Eigen domein (`nexxtlevelhypotheken.nl`)

Om de site op het eigen domein te zetten:

1. Voeg in de root een bestand `CNAME` toe met daarin alléén de regel:
   ```
   nexxtlevelhypotheken.nl
   ```
2. Zet bij uw DNS-provider de volgende records:
   - `A`-records voor `nexxtlevelhypotheken.nl` naar de GitHub Pages-IP's:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - `CNAME`-record voor `www` → `<jouw-gebruikersnaam>.github.io`
3. Wacht op DNS-propagatie (kan tot enkele uren duren).
4. Vink in **Settings → Pages** **Enforce HTTPS** aan zodra dit beschikbaar is.

## Aanpassen

- **Tekst**: alle teksten staan rechtstreeks in de `.html`-bestanden.
- **Kleuren & lettertypen**: aanpasbaar via CSS-variabelen bovenaan `css/styles.css`.
- **Logo**: vervang `assets/logo.svg` indien gewenst — wordt overal hergebruikt.
- **Contactformulier**: gebruikt `mailto:` en stuurt het bericht naar `info@nexxtlevelhypotheken.nl`. Wilt u een echt formulier zonder e-mailprogramma? Koppel dan een dienst zoals [Formspree](https://formspree.io), [Basin](https://usebasin.com) of [Netlify Forms](https://www.netlify.com/products/forms/) aan het `<form>`-element in `contact.html`.

## Licentie

© NexXt Level Hypotheken — KvK 09190751. Alle rechten voorbehouden.
