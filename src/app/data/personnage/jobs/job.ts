import { Stats } from "../stats";

export interface Job{
    name:string;
    displayName:string;
    baseStats: Stats;
    maxStats: Stats;
    pourcentageIncrementGainNiveau : Stats;
    montee:boolean;
    volante:boolean;
    jobsSuivants:Job[];
    niveauMax:number;
    rang:number;

}