# Task 3 — React DevTools

## Captures d'écran à réaliser

Avec l'extension **React Developer Tools** dans Chrome :

1. **`change_property.png`** : depuis l'onglet *Components*, sélectionne le premier `NotificationItem` rendu par `Notifications`. Dans le panneau de droite, modifie la prop `type` de `"default"` à `"urgent"`. La première notification doit passer du bleu au rouge. Capture la page (DevTools ouverts + UI mise à jour).

2. **`profiler.png`** : ouvre l'onglet *Profiler* de React DevTools, clique sur le bouton **Record**, recharge la page (Ctrl+R), puis arrête l'enregistrement. Le flame chart affiche les durées de rendu. Capture le résultat pour identifier le composant le plus long à rendre après `App`.

## Lancement de l'app

```bash
cd task_3/dashboard
npm install
npm run dev
```

Place les deux fichiers `change_property.png` et `profiler.png` directement dans `task_3/`.
