# Mini projet de test

Création d'un test qui recherche le mot "Chess" sur google.com   
Ce test affiche dans le terminal le titre des liens des 3 premiers sites retournés par Google   


# Pré-requis

Télécharger et installer node.js sur votre ordinateur   
Cloner le projet qui se trouve sur github sur votre ordinateur   
Ouvrir une console et se placer dans le projet git cloner   
Lancer la commande " npm install codeceptjs puppeteer --save-dev " afin de télécharger et installer codeceptjs puppeteer   


# Démarrage

Le test est rédigé dans le fichier search_test.js   

Pour lancer le test il faut utiliser la commande " npx codeceptjs run --steps " dans la console qui est déja ouvert  

Le test lance automatiquement le navigateur web de votre ordinateur et il doit afficher ce type de message   

```
search --
  test something
    I am on page "https://google.com"
    I fill field "q", "Chess"
    I click "input[name="btnK"]"
    I see element ".g .r h3"
    I grab text from ".g .r h3"
    I see "Chess.com - Échecs en ligne - Jouer aux echecs online"
    I see "Chess - Jeu en Ligne Gratuit | Larousse"
    I see "Online Chess Training - Play chess, Train chess."
  √ OK in 8422ms


  OK  | 1 passed   // 10s
  
 ```

 
# Conclusion 

Le test c'est déroulé correctement 


