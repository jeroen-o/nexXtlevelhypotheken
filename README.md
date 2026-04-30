# NexXt Level Hypotheken — Website

Statische website voor **nexxtlevelhypotheken.nl**, gehost op GitHub Pages.

## Stack

- Pure HTML / CSS / vanilla JavaScript — geen build-stap
- DM Sans (via Google Fonts)
- SVG logo's en iconen
- Mobile-first responsive

## Structuur

```
.
├── index.html                  Homepage
├── aanpak.html                 Methodologie (PARP / POG)
├── diensten.html               Productontwikkeling + consultancy + sectoren
├── initiatieven.html           NexXt Wonen + toekomstige initiatieven
├── over-ons.html               Verhaal, principes, Jan Boers
├── contact.html                Contactgegevens + formulier + map
├── 404.html                    404-pagina
├── CNAME                       Custom domein voor GitHub Pages
├── assets/
│   ├── logo.svg                Horizontaal logo (navy plate, oranje accent)
│   └── logo-stacked.svg        Vierkant/avatar variant
├── css/
│   └── styles.css              Volledige stylesheet
└── js/
    └── script.js               Mobiel menu, accordeon, reveal-animaties, formulier
```

## Lokaal openen

Geen build nodig — open `index.html` in een browser, of start een lokale server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

## Deployment naar GitHub Pages

1. Push deze map naar de `main` branch van een GitHub-repo.
2. Repository → Settings → Pages → Source: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)`.
3. Wacht tot de site live staat op `https://<user>.github.io/<repo>/`.

### Custom domein (nexxtlevelhypotheken.nl)

De `CNAME` file in de repo regelt het automatisch. Bij de DNS-provider:

**A-records voor het apex-domein:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME voor `www`:**
```
www  →  <user>.github.io
```

In Repository Settings → Pages: zet **Enforce HTTPS** aan zodra het certificaat is uitgegeven (kan tot 24 uur duren).

## Onderhoud

- **Telefoonnummers/adres aanpassen** → in elke HTML zoeken en vervangen (topbar, footer, CTA, contact)
- **Kleuren wijzigen** → CSS-variabelen bovenin `css/styles.css` (`--navy`, `--orange`, etc.)
- **Nieuwe pagina toevoegen** → kopieer de structuur van een bestaande pagina; update navigatie in elke pagina
- **Methodologie-stappen aanpassen** → in `aanpak.html`, binnen `<div class="step">` blokken

## Contactformulier

Het formulier op `contact.html` opent de standaard mailclient van de bezoeker met een vooringevuld bericht naar `info@nexxtlevelhypotheken.nl`. Voor server-side e-mailverwerking is bijvoorbeeld [Formspree](https://formspree.io) of een eigen endpoint nodig — pas dan in `js/script.js` de `submit`-handler aan.

## License

© NexXt Level Hypotheken — KvK 09190751
