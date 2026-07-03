# NovaFlow API - Full Stack Development

API RESTful pour la gestion des utilisateurs - Projet 2 & 3 DecodeLabs.

Cette API a été développée dans le cadre de mon stage **Full Stack Development** chez **DecodeLabs**. Elle permet de gérer des utilisateurs via des opérations CRUD complètes avec persistance de données en base.

## Technologies utilisées

- **Node.js** — Environnement d'exécution JavaScript
- **Express** — Framework web pour la création d'API
- **SQLite** — Base de données relationnelle légère
- **better-sqlite3** — Driver SQLite synchrone
- **CORS** — Gestion des requêtes cross-origin
- **Dotenv** — Gestion des variables d'environnement

## Prérequis

- Node.js (v14 ou supérieur)
- npm (v6 ou supérieur)

## Installation et démarrage

```bash
# Cloner le dépôt
git clone https://github.com/AnaniZandor/novaflow-landing.git
cd novaflow-api

# Installer les dépendances
npm install

# Créer le fichier .env
echo PORT=5000 > .env
echo NODE_ENV=development >> .env

# Démarrer le serveur
node server.js
```

Le serveur démarre à `http://localhost:5000`

## API Endpoints

- `GET /api/users` — Récupère tous les utilisateurs
- `POST /api/users` — Crée un nouvel utilisateur
- `GET /api/users/:id` — Récupère un utilisateur par ID
- `PUT /api/users/:id` — Modifie un utilisateur
- `DELETE /api/users/:id` — Supprime un utilisateur
- `GET /api/health` — Health check du serveur

## Project 3: Database Integration

### Schéma de la base de données

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL DEFAULT 'user',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

### Résultats des tests

✅ Les 5 endpoints CRUD testés avec Postman  
✅ Persistance des données vérifiée  
✅ Gestion des erreurs implémentée  
✅ Contrainte d'email unique appliquée  

### Fichiers modifiés/ajoutés

- `src/database/init.js` — Initialisation SQLite
- `src/models/User.js` — Requêtes SQL (remplace l'array en mémoire)
- `src/controllers/userController.js` — Logique métier
- `src/routes/users.js` — Endpoints API
- `server.js` — Intégration de la base de données
- `data.db` — Fichier de base de données SQLite

## Structure du projet


novaflow-api/
├── src/
│   ├── database/
│   │   └── init.js
│   ├── models/
│   │   └── User.js
│   ├── controllers/
│   │   └── userController.js
│   ├── routes/
│   │   └── users.js
│   └── middleware/
├── server.js
├── package.json
├── .env
├── .gitignore
├── data.db
└── README.md

## Auteur

**Zandor Anani** — Full Stack Developer  
GitHub: [@AnaniZandor](https://github.com/AnaniZandor)  
Portfolio: [ananizandor.netlify.app](https://ananizandor.netlify.app)