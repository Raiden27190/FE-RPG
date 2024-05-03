import { Arme } from "../objets/arme";
import { Defensif } from "../objets/defensif";
import { Objet } from "../objets/objet";

export interface Inventaire{
    divers: Objet[];
    arme?: Arme;
    defensif?: Defensif;
}