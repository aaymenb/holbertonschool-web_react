# TypeScript Tasks

Ce projet contient une série de tâches TypeScript qui démontrent différents concepts de programmation orientée objet et de typage.

## Structure du Projet

Le projet est organisé en plusieurs tâches (task_0 à task_5), chacune se concentrant sur des concepts spécifiques.

### Task 0: Interface Student

**Objectif**: Créer une interface simple pour gérer les informations des étudiants.

**Fichiers**:
- `js/main.ts`: Contient l'interface `Student` et l'implémentation de l'affichage des étudiants
- `index.html`: Page web qui affiche la liste des étudiants
- `package.json`: Configuration du projet et dépendances
- `webpack.config.js`: Configuration de Webpack pour le bundling
- `tsconfig.json`: Configuration TypeScript

**Fonctionnalités**:
- Interface `Student` avec firstName, lastName, age et location
- Affichage des étudiants dans un tableau HTML stylisé
- Calcul des statistiques (nombre total d'étudiants, âge moyen)

### Task 1: Interface Teacher et Directors

**Objectif**: Étendre les interfaces pour gérer les enseignants et les directeurs.

**Fichiers**:
- `js/main.ts`: Contient les interfaces `Teacher`, `Directors` et leurs implémentations
- `index.html`: Page web qui affiche les informations des enseignants et directeurs
- Configuration similaire à task_0

**Fonctionnalités**:
- Interface `Teacher` avec des propriétés de base
- Interface `Directors` qui étend `Teacher`
- Affichage des informations dans une interface moderne

### Task 2: Classes et Interfaces

**Objectif**: Implémenter des classes et interfaces pour gérer les employés et l'enseignement.

**Fichiers**:
- `js/main.ts`: Contient les classes `Director`, `Teacher` et leurs interfaces
- `index.html`: Page web qui affiche le système de gestion des employés
- Configuration similaire aux tâches précédentes

**Fonctionnalités**:
- Classes `Director` et `Teacher` avec leurs méthodes spécifiques
- Système de création d'employés basé sur le salaire
- Interface de gestion des employés avec des cartes interactives
- Emploi du temps d'enseignement

### Task 3: Interfaces et Classes Avancées

**Objectif**: Implémenter des interfaces et classes plus complexes.

**Fichiers**:
- `js/main.ts`: Contient les interfaces et classes avancées
- Configuration similaire aux tâches précédentes

**Fonctionnalités**:
- Interfaces plus complexes avec des méthodes abstraites
- Classes qui implémentent ces interfaces
- Tests unitaires pour vérifier le bon fonctionnement

### Task 4: Namespaces et Modules

**Objectif**: Organiser le code en utilisant les namespaces et modules TypeScript.

**Fichiers**:
- `js/main.ts`: Point d'entrée principal
- `js/subjects/`: Dossier contenant les modules pour les sujets
- `js/teachers/`: Dossier contenant les modules pour les enseignants
- Configuration similaire aux tâches précédentes

**Fonctionnalités**:
- Organisation du code en modules
- Utilisation des namespaces TypeScript
- Import/export de modules

### Task 5: Décorateurs et Métadonnées

**Objectif**: Utiliser les décorateurs TypeScript pour ajouter des fonctionnalités.

**Fichiers**:
- `js/main.ts`: Contient les décorateurs et leur utilisation
- Configuration similaire aux tâches précédentes

**Fonctionnalités**:
- Implémentation de décorateurs personnalisés
- Utilisation des métadonnées TypeScript
- Tests des décorateurs

## Comment Exécuter

Pour chaque tâche :

1. Naviguer dans le dossier de la tâche :
```bash
cd TypeScript/task_X
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm start
```

Le serveur démarrera et ouvrira automatiquement votre navigateur à l'adresse http://localhost:8080.

## Technologies Utilisées

- TypeScript
- Webpack
- HTML/CSS
- Node.js
- npm

## Structure des Fichiers Communs

Chaque tâche contient généralement :

- `js/main.ts`: Code principal
- `index.html`: Page web
- `package.json`: Configuration npm
- `webpack.config.js`: Configuration Webpack
- `tsconfig.json`: Configuration TypeScript
- `node_modules/`: Dépendances (généré par npm)
- `dist/`: Fichiers compilés (généré par Webpack)
