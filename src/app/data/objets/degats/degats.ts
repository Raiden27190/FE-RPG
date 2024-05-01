import { Portee } from "./portee";
import { Puissance } from "./puissance";
import { TypeDegats } from "./typeDegats";

export interface Degats{
    de: number;
    puissance:Puissance;
    typeDegats:TypeDegats;
    portee:Portee
}