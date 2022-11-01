dans app.module 
import { MaterialDesignModule } from './material-design/material-design.module'; 
+ imports -> voir fichier

-----------------------------------------

pour créer un module globale
ng generate module MaterialDesign
 26 min
aller chercher les modules qui m'intéressent dans https://material.angular.io/components/card/api et faire l'exports dans le material-design.module

----------------
navbar s'appelle toolbar 30min

---------------
Modifier le fichier général du css 
.flex {
    display: flex;
}

.justify-content-between{
    justify-content: space-between;
}
-----------------------------
Création de la route login

ng generate component auth/login
Modifier le app-routing.module
+ <router-outlet></router-outlet> dans app.component.html 
---------------------------
Pour redéployer sur netlify
push sur github
aller sur le projet puis deploys  /  Options / Retry with latest branch commit


