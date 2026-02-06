# PROJET 7 — Kasa

Application front-end React pour le site de location immobilière **Kasa**.  
Le projet met en place la navigation, l’affichage dynamique des logements, ainsi que des pages dédiées (Accueil, À propos, Fiche logement, Erreur 404).

---

## Aperçu

### Pages principales
- **Accueil** : liste des logements (cards) avec navigation vers la fiche
- **Fiche logement** : galerie, infos, tags, hôte, note, description, équipements
- **À propos** : sections informatives (collapse)
- **404** : page d’erreur si la route n’existe pas ou si l’ID logement est invalide

---

## Fonctionnalités

- Routing avec **React Router**
- Pages dynamiques via paramètre d’URL (`/logement/:id`)
- Composants réutilisables (cards, collapse, slider, rating, etc.)
- Gestion d’erreurs (route inconnue, logement introuvable)
- Style en **SCSS** (structure modulaire)

---

## Stack technique

- **React**
- **React Router**
- **SCSS**
- Données logements en local (ex : `logements.js` / `logements.json` selon ton projet)

---

## Prérequis

- Node.js (recommandé : version LTS)
- npm (ou yarn)

---

## Installation

1. Cloner le dépôt :
   ```bash
     git clone <url-du-repo>
     cd <nom-du-projet>

2. Installer les dépendances :
   ```bash
    npm install
   
---

## Lancer le projet en local
    npm run dev

---

## Build (production)
    npm run build

---

## Créer une version de production :
    npm run build

---

## Prévisualiser le build :
    npm run preview

---

## KASA/
    ```bash
    ├─ public/
    ├─ src/
    │  ├─ assets/
    │  ├─ components/
    │  │  ├─ Banner/
    │  │  ├─ Card/
    │  │  ├─ Collapse/
    │  │  ├─ Footer/
    │  │  ├─ Header/
    │  │  ├─ Layout/
    │  │  ├─ Rating/
    │  │  └─ Slideshow/
    │  ├─ pages/
    │  │  ├─ About/
    │  │  ├─ Error/
    │  │  ├─ Home/
    │  │  └─ Housing/
    │  ├─ router/
    │  │  └─ Router.jsx
    │  ├─ styles/
    │  ├─ App.jsx
    │  ├─ main.jsx
    │  └─ logements.json
    ├─ index.html
    ├─ package.json
    ├─ vite.config.js
    └─ README.md

---

Routes
- / : Page d’accueil
- /about : Page À propos
- /logement/:id : Fiche logement dynamique
- '*' : Page 404

---

## Données logements
src/logements.json

---

## Auteur
Projet réalisé dans le cadre de la formation
OpenClassrooms – Intégrateur Web.
