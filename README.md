# Thème français pour jsonresume / French localized theme for jsonresume 

Forked from [Julien Dambron's repo](https://github.com/jdambron/jsonresume-theme-jdambron-fr).  
It started because I did not like the birth date and location format.  
Then I decided to modify the padding and add the possibility to use an image/pictogram for the insterests (looks cute).  

I use it with [resumed](https://github.com/rbardini/resumed).
After installing resumed with npm, I simply place this repo's folder into the "node_modules" folder:
<pre>
resumed/
├── node_modules
│   ├── ...
│   ├── jsonresume-theme-frankwap-fr
│   └── ...
├── package.json
└── package-lock.json
</pre>

Then I use the `--theme` option of resumed as follow:
```bash
resumed validate CV-fr && resumed render CV-fr --output CV-fr.html --theme jsonresume-theme-frankwap-fr 
```
