# Idle Downloader

Petit guide pour lancer et tester rapidement le jeu idle de téléchargement.

## Lancer l'aperçu local
1. Depuis la racine du dépôt, démarrez un petit serveur statique :
   ```bash
   python -m http.server 4000
   ```
2. Ouvrez ensuite votre navigateur à l'adresse [http://localhost:4000](http://localhost:4000).
3. Le jeu s'affiche immédiatement (aucune dépendance ni compilation nécessaire).

> Astuce : si vous préférez ouvrir directement le fichier sans serveur, double-cliquez simplement sur `index.html` à la racine du dépôt.

## Chemins utiles
- **/index.html** utilise `CSS/style.css`. C'est l'entrée principale recommandée.
- **/HTML/index.html** pointe vers `../CSS/style.css` et fonctionne si vous lancez le serveur depuis la racine.

## Contrôles du jeu
- Le téléchargement tourne automatiquement en boucle.
- Cliquez sur **Push download (+8%)** pour accélérer manuellement si vous avez assez de crédits.
- Achetez des améliorations dans la section **Optimisez votre pipeline** pour augmenter la vitesse et les gains.
- Le journal en bas résume vos achats et téléchargements terminés.

Bon test !
