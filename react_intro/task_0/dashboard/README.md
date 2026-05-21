# React Intro - Task 0: Dashboard

Premier projet React du module **react_intro** de Holberton School. Une application React basique nommée `dashboard`, créée avec **Vite**, qui pose les fondations de tout le module.

## Description

L'application affiche un tableau de bord simple composé de trois sections :

- **Header** : logo Holberton et titre « School dashboard ».
- **Body** : invitation à se connecter pour accéder au dashboard complet.
- **Footer** : copyright dynamique avec l'année courante.

## Stack technique

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/) — outil de build
- [Jest 29](https://jestjs.io/) + [React Testing Library](https://testing-library.com/) — tests
- [Babel](https://babeljs.io/) — `@babel/preset-env` & `@babel/preset-react`
- [ESLint 8](https://eslint.org/) — linter (avec `eslint-plugin-jest`)

## Structure du projet

```
dashboard/
├── .babelrc                # Configuration Babel pour Jest
├── .eslintrc.cjs           # Configuration ESLint
├── fileTransformer.js      # Transformer Jest pour les imports d'images
├── setupTests.js           # Setup de Jest (@testing-library/jest-dom)
├── index.html              # Point d'entrée HTML
├── package.json            # Dépendances + config Jest
├── vite.config.js          # Configuration Vite
├── public/
│   └── favicon.ico         # Favicon Holberton
└── src/
    ├── main.jsx            # Bootstrap React
    ├── App.jsx             # Composant principal
    ├── App.css             # Styles
    └── assets/
        ├── holberton-logo.jpg
        └── close-button.png
```

## Installation

```bash
cd react_intro/task_0/dashboard
npm install
```

## Scripts disponibles

| Commande           | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Lance le serveur de développement    |
| `npm run build`    | Build de production                  |
| `npm run preview`  | Aperçu du build de production        |
| `npm run lint`     | Vérifie le code avec ESLint          |
| `npm test`         | Lance la suite de tests Jest         |

## Configuration Jest

Jest est configuré directement dans `package.json` avec :

- `testEnvironment: jsdom` — simule un DOM pour les tests React
- `setupFilesAfterEnv` — charge `@testing-library/jest-dom`
- `moduleNameMapper` — mappe les imports CSS via `identity-obj-proxy` et les images via `fileTransformer.js`
- Transformation Babel via `babel-jest` (configuré par `.babelrc`)

## Auteur

Aymen — Holberton School Full-Stack.
