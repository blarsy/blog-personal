title: Bloguer léger avec Hexo et Markdown
date: 2015-10-04 22:22:59
tags: 
- Hexo
- Markdown
- Blog
- NodeJs
---
*Ca fait un moment que la nécessité se fait sentir chez moi de partager mes élucubrations autour de NodeJS, AngularJS et MongoDB (ma pile de programmation de site web préférée du moment).*

*Dans le cadre de mon projet [Dealbee](https://www.dealbee.net "Dealbee, les deals faciles"), ça ne peut littéralement plus attendre, et dans la foulée, autant mettre sur pied le blog perso qui manque à mon activité.*

*Quoi de plus logique qu'un premier billet sur ... comment j'ai choisi mes technos de blogging.*

*Voici donc [Hexo](https://hexo.io) et [Markdown](https://daringfireball.net/projects/markdown/), les composants de base de mes blogs. Vous verrez que contre une courbe d'apprentissage plutôt réduite (pour un programmeur web, du moins), j'ai pu mettre rapidement en place plusieurs blogs qui sont particulièrement simples à héberger.*

Mes besoins
-----------

+ Pour Dealbee, mon hébergement a un **espace limité** à 1GB, et il 650MB sont d'office occupé par le code et la base de données. Donc le blog doit être sobre en espace de stockage. Au passage, compliments à [Openshift](https://openshift.redhat.com/ "Openshift: Hébergement NodeJS et autres techno Open Source") pour offrir cet hébergement gratuitement.
+ Il doit être possible (et facile) d'**intégrer le blog de Dealbee au site existant**, sous https://www.dealbee.net/blog
+ Pour mon blog technique, je ne veux pas utiliser d'autre techno, donc la solution de blogging sera **la même pour les 2 blogs**.
+ J'ai une énorme préférence pour les choses **simples**.

Ne conviennent pas:

+ Joomla, Worpress, Umbraco, ... Trop complexes à mettre en oeuvre. C'est un peu le bazooka pour tuer la mouche...
+ Ghost, un CMS basé sur NodeJS, affiché minimaliste, mais qui occupe quand même 150MB à vide, un peu trop pour mon hébergement Dealbee

On a un gagnant: Markdown
-------------------------

C'est une syntaxe qui permet de taper rapidement du contenu HTML.
Mardown n'est pas aussi riche qu'HTML, et ce n'est pas le but: juste de quoi écrire des articles (texte, mise en forme basique, images, liens, ...)

En fait, je l'utilise déjà pour taper le présent texte :-)

La prise en main est quasi immédiate (une petite heure de lecture)

Pourquoi Hexo ?
---------------

Il ne manque pas d'outils de blogging léger ([exemples](http://mashable.com/2014/05/09/16-minimalist-blogging-platforms/)).

Hexo a retenu mon attention car il permet de *génerer* un blog. Il y a donc une partie à installer (et sauvegarder !) sur mon ordinateur, qui permet de créer les articles, choisir un thème, et (re)générer le blog.
Le blog ainsi généré ne contient que des fichiers de contenu, de mise en forme et d'effet dynamique pour les pages. Autant dire une poussière pour mon espace d'hébergement limité.

Hexo n'est pas le seul a fonctionner de la sorte, mais le facteur décisif à été qu'il est basé sur NodeJS, un moteur d'éxécution de Javascript que je connaît bien. Ce n'est pas en soi un critère décisif, mais c'est celui qui a départagé Hexo des autres.

Ceci dit, Hexo impose d'utiliser des outils hautement geekesques, comme une bonne vieille ligne de commande. [Voyez](http://jr0cket.co.uk/developer-guides/hexo-workflow.png "Utiliser Hexo") par vous-même. En tant que programmeur, ça m'attire plus que ça ne me repousse ;-)

Je vais même pouvoir maintenir mon blog dans mon [repo Github](https://github.com/blarsy/blog-personal) !

**Et vous, comment bloguez-vous ?**