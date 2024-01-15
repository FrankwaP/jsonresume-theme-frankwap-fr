# Thème français pour jsonresume / French localized theme for jsonresume

Allez cette fois-ci on peut écrire en Français :-)  

Ce dépot est forké de [celui de Julien Dambron's repo](https://github.com/jdambron/jsonresume-theme-jdambron-fr).  
L'objectif initial était de modifier les formats de l'adresse, des dates, des niveaux de langues.  
J'ai ensuite ajouté des modifications sur le padding ou la "solidarité" des paragraphes lors de l'impression ou l'export en PDF.  

Et sinon ça je n'avais jamais programmé en JS avant et j'ai découvert le HandlebarsJS à l'occasion, donc voilà soyez indulgents <3  

## Utilisation

J'utilise ce thème avec [resumed](https://github.com/rbardini/resumed).

Tout d'abord, je place ce dépot dans le dossier "node_modules" de resumed:
<pre>
resumed/
├── node_modules
│   ├── ...
│   ├── jsonresume-theme-frankwap-fr
│   └── ...
├── package.json
└── package-lock.json
</pre>

Enfin j'utilise l'option `--theme` de resumed:

```bash
resumed validate CV-fr && resumed render CV-fr --output CV-fr.html --theme jsonresume-theme-frankwap-fr 
```

## Niveaux de langue

J'ai considéré les [niveaux officiels](https://www.service-public.fr/particuliers/vosdroits/F34739) au niveau européen.

Pour que les barres de niveaux soient coorectement affichés, chaque niveau défini dans le JSON (`language>fluency`) doit être de la forme "code: description" (où le code vaut A1, A2, B1, B2, C1 ou C2).

Perso, j'ai opté pour ceux-là:  

- "A1: Débutant"  
- "A2: Élémentaire"  
- "B1: Intermédiaire"  
- "B2: Intermédiaire Avancé"  
- "C1: Avancé"  
- "C2: Maîtrise"  

Mais techniquement vous pouvez mettre "A1: Gros nOOb" et ça passe aussi :-)  
