import { Stats } from "../personnage/stats";
import { Objet } from "./objet";

// export class Defensif extends Objet{
//     bonusStats:Stats;

//     /**
//      *
//      */
//     constructor(nom:string, effet:string, bonusStats:Stats) {
//         super(nom, effet);
//         this.bonusStats=bonusStats;
//     }
// }

export type Defensif = Objet & { bonusStats:Stats }