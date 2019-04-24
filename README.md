[![Netlify Status](https://api.netlify.com/api/v1/badges/f58d52e0-fc14-4f89-8503-65c872c42aac/deploy-status)](https://app.netlify.com/sites/loving-bohr-5d6ec3/deploys)

### Ce [ projet :link: ](https://loving-bohr-5d6ec3.netlify.com/films) guidé a été réalisé dans le cadre de la formation e-learning React proposé par [Dyma](https://dyma.fr/)  :fr: :thumbsup:

## Fonctionnalités du projet

- Liste de films récupérée avec l' API externe [The Movie DB](https://www.themoviedb.org/)

- Afficher les détails d'un film

- Barre de recherche utilisant l' API externe pour récupérer les films

- Gérer une liste de favoris : ajouter un film, le suprimer, etc...

![demoAlloMovies2](https://user-images.githubusercontent.com/44428775/56596209-6dc9aa00-65f0-11e9-8904-62e44cf6ab1d.gif)

## Les outils

- [Bootstrap](https://getbootstrap.com/)
- Utilisation de [Sass](https://sass-guidelin.es/fr/) et des modules CSS
- [Formik](https://jaredpalmer.com/formik/)(utilisé par airbnb, lyft, docker etc) & [Yup](https://github.com/jquense/yup) pour la gestion de la barre de recherche.
- [Axios](https://github.com/axios/axios) pour réaliser des requêtes HTTP vers le serveur ou les API tierces.
- API externe [The Movie DB](https://www.themoviedb.org/) pour récupérer la liste de films.
- [React-Router-Dom](https://reacttraining.com/react-router/web/guides/quick-start) permettant de simuler la navigation entre plusieurs pages, tout en restant sur une SPA
- [Firebase](https://firebase.google.com/) afin de pouvoir utiliser une base de données sans avoir à passer par un serveur.
- Déploiement avec [Netlify](https://www.netlify.com/)


Ce projet a été démarré avec [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter:

### `npm start`

Lance l'application en mode développement. .<br>
Oovrez [http://localhost:3000](http://localhost:3000) pour l'afficher dans le navigateur.

La page sera rechargée si vous apportez des modifications.<br>
Vous verrez également les erreurs de peluches dans la console.

### `npm test`

Lance l' exécution de test en mode veille interactive..<br>
Voir la section sur l' [ exécution des tests ](https://facebook.github.io/create-react-app/docs/running-tests)  pour plus d'informations.



### `npm run build`

Construit l'application pour la production dans le dossier `build`.<br>
Il combine correctement React en mode de production et optimise la construction pour obtenir les meilleures performances.

La construction est minifiée et les noms de fichiers incluent les hachages.<br>
l' application est prête à être déployée!

Voir la section sur le [déploiment](https://facebook.github.io/create-react-app/docs/deployment) pour plus d'informations.

### `npm run eject`

**Remarque: il s'agit d'une opération à sens unique. Une fois que vous `eject`, vous ne pouvez pas revenir en arrière!**

Si vous n'êtes pas satisfait de l'outil de génération et des choix de configuration, vous pouvez faire `eject` à tout moment. Cette commande supprimera la dépendance de construction unique de votre projet.

Au lieu de cela, il copiera tous les fichiers de configuration et les dépendances transitives (Webpack, Babel, ESLint, etc.) directement dans votre projet afin que vous en gardiez le contrôle total. Toutes les commandes, à l'exception de  `eject` fonctionneront toujours, mais elles pointeront vers les scripts copiés afin que vous puissiez les modifier. À ce stade, vous êtes seul.

Vous ne devez jamais utiliser `eject`. L'ensemble de fonctionnalités organisées est adapté aux déploiements de taille moyenne et petite, et vous ne devriez pas vous sentir obligé d'utiliser cette fonctionnalité. Cependant, nous comprenons que cet outil ne serait pas utile si vous ne pouviez pas le personnaliser lorsque vous êtes prêt.

