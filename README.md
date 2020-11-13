# Equidia

Projet scolaire de site de gestion d'un centre équestre. Fait avec Angular et Material.

# Lancer le serveur

Pour lancer le serveur API, lancer le main de ecurie/src/main/java/com/esiea/ecurie/ProjetEcurieApplication.
Il est hébergé sur le port 8080.

# Informations importantes

Certaines pages sont mal cadrées, il faut vérifier que l'on descende jusqu'en bas de la page pour ne pas rater certains composants.
Lors des ajouts (par exemple la création d'un nouveal administrateur), il faut recharger la page pour voir le nouvel objet créé apparaître.
Quelques comptes pour les tests :
 - (superadmin) sauron@mordor.me / mdp
 - (admin) admin1@admin.nk / mdp
 - (moniteur) roi@gondo.nm / mdp
 - (cavalier) merry@brandebouc.sh / mdp.
 
  
# Problèmes non résolus:

Un des mapping GET ( @GetMapping("/utilisateurs/{utilisateurId}") ) ne fonctionne pas. Pourtant il suit la même logique que les mappings identiques pour les chevaux et les reprises. 
Encore plus surprenant, la méthode appelée lors de ce mapping est utilisée ailleurs dans le serveur. 
Ce problème n'est survenu que peu avant la remise, nous n'avons donc pas pu le corriger.
