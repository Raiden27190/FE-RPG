import { Stats } from "../stats";

export class Job{
    public name:string;
    public baseStats: Stats;
    public maxStats: Stats;
    public pourcentageIncrementGainNiveau : Stats;
    public montee:boolean;
    public volante:boolean;
    public jobsSuivants:Job[] = [];
    public niveauMax:number;

    constructor(name: string, baseStats:Stats, maxStats:Stats, pourcentageIncrementNiveau:Stats, montee:boolean, volante:boolean, niveauMax:number) {
        this.name = name;
        this.baseStats = baseStats;
        this.maxStats = maxStats;
        this.pourcentageIncrementGainNiveau = pourcentageIncrementNiveau;
        this.montee = montee;
        this.volante = volante;
        this.niveauMax = niveauMax;
    }

    public static readonly soeur:Job = {
        name:"Sœur",
        baseStats: {
            pointsVie:15,
            mouvement:4,
            force:5,
            magie:15,
            technique:10,
            vitesse:10,
            chance:5,
            defense:10,
            resistance:12,
            charisme:10},
        maxStats: {
            pointsVie:0,
            mouvement:10,
            force:55,
            magie:55,
            technique:40,
            vitesse:40,
            chance:40,
            defense:40,
            resistance:40,
            charisme:40},
        pourcentageIncrementGainNiveau: {
            pointsVie:100,
            mouvement:30,
            force:10,
            magie:95,
            technique:20,
            vitesse:20,
            chance:30,
            defense:40,
            resistance:60,
            charisme:60},
        jobsSuivants: [],
        montee:false,
        volante:false,
        niveauMax:20
    }
}