# Alos_act2-
FETTOUHI LEILA/ MAROUF NAWEL

- Nous avons d'abord démarré un projet node JS API en créant un répértoire qui contient le package.json ( avec la commande npm init sur le cmd).
- Nous avons ajouté Express à notre node API avec la commande node install express et ajouté le serveur Express dans notre fichier index.js .
- Nous avons lancé notre adresse localhost:8080 avec la commande node index.js sur le terminal du fichier index .
- Nous avons procédé à la création de nos routes selon notre API Bloody. //Sachant que Bloody est utilisée par des infirmiers responsables du don de sang, 
ses 3 fonctionalités sont: L'ajout d'un nouveau donneur à la bdd, la suppresion d'un donneur de la bdd(souvent au cas ou ce donneur vient de donner du sang, il pourra 
le faire qu'aprés 3 ou 4 mois, il devra etre ajouté à nouveau s'il veut etre donneur de nouveau un fois cette périod terminé), et l'affichage/récupération 
de donneurs selon leurs groupe sanguin) La 3ème fonctionalité est la plus cruciale car elle aide à effectuer des dons. L'infirmer peut chercher des donneurs selon
un groupe sanguin qu'il spécifie//. 
- Concernant le test, nous avons utilisé mocha, nous l'avons installé d'abord avec la commande npm i mocha chai chai-http --save-dev.
- Nous avons ajouté le code "scripts": {"test": "mocha"} dans le package.json.
- Nous avons crée un dossier test, et ajouté dedans un fichier app.test.js qui contient le code du test mocha.
- Finalement, pour utilier le test nous nous positionons dans le terminal de package.json et essayer le code npm test.
