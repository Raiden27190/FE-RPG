import { Arme } from "../objets/arme";
import { Defensif } from "../objets/defensive";
import { Objet } from "../objets/objet";

export interface Inventaire{
    divers?: Objet[];
    arme?: Arme;
    defensif?: Defensif;
}