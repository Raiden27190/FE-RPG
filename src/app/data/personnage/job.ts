import { Stats } from "./stats";

export class Job{
    public name:string;
    public baseStats: Stats ;
    public maxStats: Stats ;
    public pourcentageIncrementGainNiveau : Stats ;
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
        baseStats: new Stats(15,4,5,15,10,10,5,10,12,10),
        maxStats: new Stats(0,10,55,55,40,40,40,40,40,40),
        pourcentageIncrementGainNiveau: new Stats(100,30,10,95,20,20,30,40,60,60),
        jobsSuivants: [],
        montee:false,
        volante:false,
        niveauMax:20
    }
}