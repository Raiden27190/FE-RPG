import { Degats } from "./degats/degats";
import { Objet } from "./objet";

// export class Arme implements Objet{
//     degatsPrincipaux:Degats;
//     degatsSecondaires:Degats|undefined;

//     /**
//      *
//      */
//     constructor(nom: string, effet:string, degatsPrincipaux:Degats, degatsSecondaires?:Degats) {
//         super(nom,effet);
//         this.degatsPrincipaux = degatsPrincipaux;
//         this.degatsSecondaires = degatsSecondaires;
//     }

// }
export type Arme = Objet & {degatsPrincipaux: Degats, degatsSecondaires?:Degats}