## [Voir le projet en ligne](https://sebastien-pereda.github.io/)

## Log
### 2018-02-15 – Navigation sans JS et refonte Portfolio
Mise en place d’une navigation alternative en cas de désactivation de Javascript.

Ajout des projets Foundation au portfolio et refonte de la présentation des projets.


### 2018-02-01 – Mise en production v1
Les balises ```<div>``` n’ont été utilisées que lorsqu’il n’était pas possible de faire autrement.
  
L’ensemble des pages a été passé au contrôle du W3C.

Le CSS a été allégé des classes non utilisées, minifié et testé.

Les images ont été optimisées à l’entrée (optimisation de la taille en fonction de l’usage) et à la sortie (optimisation de la compression).

En cas de désactivation de JavaScript, des alternatives sont fournies, ou une information si l’alternative n’est pas encore en place (comme pour la navigation mobile).

## Le projet
Ce site a été réalisé dans le cadre de la formation Programmation de sites web du CNAM PACA.

Une attention particulière a été portée à la sémantique et à l’accessibilité.

Les articles ont été rédigés pour l’occasion, directement en HTML, avec Pug et Gulp en guise de CMS.

La page Ressources est une collection d’articles et outils utiles pour apprendre et pratiquer le développement web.

Un framework CSS a été développé pour l’occasion avec Stylus. Le [code source de BASICSS](https://github.com/basicss/basicss) est disponible sur Github

## _build
Le dossier **_build** contient la version de développement. Trois fichiers CSS sont utilisés :
* « main » pour le framework ;
* « utilities » pour les classes utiles (color, spacing, typography) ;
* « project » pour le CSS du projet lui-même.

Le dossier **dist** contient le dossier de production.

Le JS est concaténé et minifié.

Le CSS est concaténé et minifié. 

Purifycss est utilisé pour identifier les classes non utilisées et les exclure. Ainsi, les avantages d’un framework sont conservés (gain de temps en développement) et les inconvénients (classes inutilisées) sont évités.