import { Arme } from "../objets/arme";
import { Defensif } from "../objets/defensive";
import { Objet } from "../objets/objet";

export class Inventaire{
    divers: Objet[];
    arme: Arme|null;
    defensif: Defensif|null;

    constructor()
    {
        this.divers=[];
        this.arme = null;
        this.defensif = null;
    }
    
}