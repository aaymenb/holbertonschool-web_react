# React Props — Holberton School

Module **react_props** du projet [holbertonschool-web_react](https://github.com/holbertonschool/holbertonschool-web_react). Application React **dashboard** (Vite) : découpage en composants, props, tests et améliorations progressives.

## Tâches

| Tâche | Objectif |
| ----- | -------- |
| **task_0** | Composants `Header`, `Login`, `Footer` + shell `App` avec `React.Fragment` |
| **task_1** | Tests unitaires des composants (logo, formulaire, copyright) |
| **task_2** | `NotificationItem`, prop `notifications`, styles inline par type |
| **task_3** | React DevTools (captures `change_property.png`, `profiler.png`) |
| **task_4** | `CourseList` / `CourseListRow`, prop `isLoggedIn` |
| **task_5** | Prop `displayDrawer` sur `Notifications` |

Chaque tâche contient un dossier `dashboard/` autonome (copie incrémentale du projet).

## Stack

- React 18 · Vite 5 · Jest 29 · React Testing Library · ESLint 8 · Babel

## Démarrage (exemple task_5)

```bash
cd react_props/task_5/dashboard
npm install
npm run dev      # http://localhost:5173
npm test         # suite Jest
npm run lint     # ESLint
```

## Structure type (task_5)

```
dashboard/src/
├── App/
├── Header/
├── Login/
├── Footer/
├── Notifications/
│   ├── NotificationItem.jsx
│   └── Notifications.jsx
├── CourseList/
│   ├── CourseList.jsx
│   └── CourseListRow.jsx
├── utils/
└── assets/
```

## Auteur

Aymen — Holberton School Full-Stack.
