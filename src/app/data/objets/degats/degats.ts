import { Portee } from "./portee";
import { Puissance } from "./puissance";
import { TypeDegats } from "./typeDegats";

export class Degats{
    de: number;
    puissance:Puissance;
    typeDegats:TypeDegats;
    portee:Portee

    constructor(de:number, puissance:Puissance, typeDegats:TypeDegats, portee:Portee)
    {
        this.de = de;
        this.puissance = puissance;
        this.typeDegats = typeDegats;
        this.portee = portee;
    }
}