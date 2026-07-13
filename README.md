
#  NovaFlow - Projet 4 : Intégration Full-Stack

##  Présentation du Projet

**NovaFlow** est une application web de gestion de projets qui démontre l'intégration complète entre un frontend moderne et un backend robuste.

Ce projet représente l'aboutissement de 4 projets successifs chez **Decode Labs**, où j'ai construit pas à pas une application full-stack fonctionnelle.

---

##  Objectif du Projet 4

**L'intégration totale entre le Frontend et le Backend**

Le Projet 4 est l'étape finale qui connecte :
- ✅ L'interface utilisateur (Landing Page)
- ✅ L'API RESTful
- ✅ La base de données SQLite

---

## 📊 Architecture du Projet

```

┌─────────────────────────────────────────────────────────┐
│                    NAVIGATEUR                           │
├─────────────────────────────────────────────────────────┤
│  🎨 Landing Page (P1)           📊 Dashboard (P4)      │
│  ┌─────────────────┐           ┌─────────────────┐     │
│  │  UI/UX Design   │           │  Gestion Users  │     │
│  │  Responsive     │           │  Fetch API      │     │
│  └─────────────────┘           └─────────────────┘     │
├─────────────────────────────────────────────────────────┤
│                      ↕ Fetch API                        │
├─────────────────────────────────────────────────────────┤
│               🔧 API Backend (P2-P3)                    │
│  ┌─────────────────────────────────────────────┐       │
│  │  Node.js / Express                           │       │
│  │  Routes : GET, POST, DELETE, PUT            │       │
│  │  CORS configuré                             │       │
│  └─────────────────────────────────────────────┘       │
├─────────────────────────────────────────────────────────┤
│                      ↕ SQLite                           │
├─────────────────────────────────────────────────────────┤
│               💾 Base de données SQLite                  │
│  ┌─────────────────────────────────────────────┐       │
│  │  Table : users                              │       │
│  │  - id (INTEGER PRIMARY KEY)                │       │
│  │  - name (TEXT)                             │       │
│  │  - email (TEXT)                            │       │
│  │  - role (TEXT)                             │       │
│  │  - createdAt (DATETIME)                    │       │
│  └─────────────────────────────────────────────┘       │
└─────────────────────────────────────────────────────────┘

```

---

## 🛠️ Stack Technique

### Frontend
| Technologie | Utilisation |
|-------------|-------------|
| **HTML5** | Structure de la page |
| **CSS3** | Design responsive & animations |
| **JavaScript (ES6+)** | Logique métier & interactions |
| **Fetch API** | Communication avec le backend |
| **Async/Await** | Gestion asynchrone |

### Backend
| Technologie | Utilisation |
|-------------|-------------|
| **Node.js** | Runtime JavaScript |
| **Express.js** | Framework web |
| **SQLite3** | Base de données légère |
| **CORS** | Sécurité inter-domaines |

---

## 📁 Structure du Projet

```

novaflow-landing/
│
├── 📄 index.html              # Landing page (P1)
├── 📄 dashboard.html          # Dashboard (P4) 🆕
├── 📄 style.css               # Styles CSS
├── 📄 script.js               # Scripts frontend
├── 📄 README.md               # Documentation


---

##  Fonctionnalités Implémentées

###  Landing Page (Project 1)
- Design moderne et épuré
- Navigation responsive
- Mode sombre/clair
- Boutons d'appel à l'action
- Section témoignages

### API Backend (Project 2-3)
- **GET** `/api/users` - Récupérer tous les utilisateurs
- **GET** `/api/users/:id` - Récupérer un utilisateur
- **POST** `/api/users` - Créer un utilisateur
- **PUT** `/api/users/:id` - Modifier un utilisateur
- **DELETE** `/api/users/:id` - Supprimer un utilisateur

###  Intégration (Project 4)
- Communication Frontend ↔ Backend via Fetch API
- Gestion d'erreurs avec try/catch
- Affichage dynamique des données
- Dashboard de gestion des utilisateurs
- CRUD complet depuis l'interface

---

## 🚀 Installation et Exécution

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/AnaniZandor/novaflow-landing.git
cd novaflow-landing
```

2️⃣ Installer les dépendances backend

```bash
cd backend
npm install
```

3️⃣ Démarrer le serveur backend

```bash
node server.js
```

Le serveur tourne sur : http://localhost:5000

4️⃣ Ouvrir le frontend

· Landing page : Ouvrir index.html dans le navigateur
· Dashboard : Ouvrir dashboard.html dans le navigateur

---

🧪 Tests Effectués

Test Méthode Endpoint Status
Récupération des users GET /api/users ✅ 200 OK
Création d'un user POST /api/users ✅ 201 Created
Modification d'un user PUT /api/users/{id} ✅ 200 OK
Suppression d'un user DELETE /api/users/{id} ✅ 204 No Content

---

💻 Extrait de Code (Intégration P4)

```javascript
// Le cœur de l'intégration Frontend-Backend
async function loadUsers() {
    try {
        // 1️⃣ INPUT : L'utilisateur clique
        // 2️⃣ PROCESS : Appel à l'API
        const response = await fetch('http://localhost:5000/api/users');
        
        // 3️⃣ Vérification du status HTTP
        if (!response.ok) {
            throw new Error(`Erreur HTTP ${response.status}`);
        }
        
        const users = await response.json();
        
        // 4️⃣ OUTPUT : Affichage dans l'interface
        displayUsers(users);
        
    } catch (error) {
        // 5️⃣ Gestion d'erreur utilisateur
        showErrorMessage('❌ Impossible de charger les données');
        console.error('Erreur détaillée:', error);
    }
}

// Création d'un utilisateur
async function createUser(name, email, role) {
    try {
        const response = await fetch('http://localhost:5000/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, role })
        });
        
        if (!response.ok) throw new Error(`Erreur ${response.status}`);
        
        const newUser = await response.json();
        console.log('✅ Utilisateur créé:', newUser);
        return newUser;
        
    } catch (error) {
        console.error('❌ Erreur création:', error);
    }
}
```

---

🔗 Liens Importants

Lien URL
Dépôt GitHub https://github.com/AnaniZandor/novaflow-landing
Landing Page (live) https://ananizandor.github.io/novaflow-landing/
Dashboard (live) https://ananizandor.github.io/novaflow-landing/dashboard.html
API Backend http://localhost:5000/api/users (en local)

---

📊 Évolution du Projet (Branches GitHub)

Branche Contenu Statut
project-4/frontend-integration Intégration complète P1-P4 ✅ Fusionnée dans main
main Version finale complète ✅ À jour

🔄 Note importante : La branche project-4/frontend-integration a été fusionnée dans main. La branche main contient désormais l'intégralité du projet (Landing Page, API, Dashboard et intégration). Toutes les fonctionnalités des 4 projets sont réunies dans une seule branche opérationnelle.

---

 Projets Inclus

Projet Description Branche
P1 Landing page UI/UX main
P2-P3 API RESTful + SQLite main
P4 Intégration Frontend-Backend main

---

 Ce que j'ai appris

Compétences Techniques

· ✅ Architecture client-serveur
· ✅ Création d'API RESTful
· ✅ Manipulation de bases de données SQLite
· ✅ Communication asynchrone (Fetch API, Async/Await)
· ✅ Gestion d'erreurs robuste
· ✅ Sécurité avec CORS
· ✅ Manipulation du DOM en temps réel

Compétences Méthodologiques

· ✅ Travail avec Git et GitHub
· ✅ Gestion des branches (main, feature branches)
· ✅ Déploiement sur GitHub Pages
· ✅ Documentation technique
· ✅ Tests et validation

---

 Remerciements

· Decode Labs - Pour la formation et l'accompagnement
· Toute l'équipe - Pour le support et les conseils
· La communauté - Pour les retours et encouragements

---



AJAVON Anani Zandor

· GitHub : @AnaniZandor
· LinkedIn : Anani Zandor
· Portfolio : ananizandor.netlify.app

---

Réalisé dans le cadre de la formation Decode Labs 🚀






