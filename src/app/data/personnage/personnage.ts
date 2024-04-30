import { Inventaire } from "./inventory";
import { Job } from "./job";
import { Stats } from "./stats";

export class Personnage{
    public nom: string;
    public age: number;
    public taille: number;
    public sexe: string;
    public pVActuels: number;
    public niveau: number;
    public experience: number;
    public maxExperience: number;
    public currentStats:Stats;
    public permanentBoosts: Stats;
    public job: Job;
    public inventaire:Inventaire;

constructor(nom: string, age:number, taille:number, sexe:string, job:Job) {
    this.nom = nom;
    this.age = age;
    this.taille = taille;
    this.sexe = sexe;
    this.niveau = 0;
    this.experience = 0;
    this.maxExperience = 100;
    this.permanentBoosts = new Stats(0,0,0,0,0,0,0,0,0,0);
    this.job = job;
    this.currentStats = job.baseStats;
    this.pVActuels = job.baseStats.pointsVie;
    this.inventaire=new Inventaire();
    this.LevelUp();
}

    public LevelUp() :void
    {
        this.niveau+=1;
        let randomIncrement = Math.ceil(2*Math.random())
        this.currentStats.pointsVie += Math.random() <= this.job.pourcentageIncrementGainNiveau.pointsVie/100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2*Math.random());
        this.currentStats.mouvement += Math.random() <= this.job.pourcentageIncrementGainNiveau.mouvement/100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2*Math.random());
        this.currentStats.force += Math.random() <= this.job.pourcentageIncrementGainNiveau.force/100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2*Math.random());
        this.currentStats.magie += Math.random() <= this.job.pourcentageIncrementGainNiveau.magie/100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2*Math.random());
        this.currentStats.technique += Math.random() <= this.job.pourcentageIncrementGainNiveau.technique/100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2*Math.random());
        this.currentStats.vitesse += Math.random() <= this.job.pourcentageIncrementGainNiveau.vitesse/100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2*Math.random());
        this.currentStats.chance += Math.random() <= this.job.pourcentageIncrementGainNiveau.chance/100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2*Math.random());
        this.currentStats.defense += Math.random() <= this.job.pourcentageIncrementGainNiveau.defense/100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2*Math.random());
        this.currentStats.resistance += Math.random() <= this.job.pourcentageIncrementGainNiveau.resistance/100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2*Math.random());
        this.currentStats.charisme += Math.random() <= this.job.pourcentageIncrementGainNiveau.charisme/100 ? randomIncrement : 0;
    }

    public UpgradeJob(job: Job):void
    {
        this.job=job;
        this.currentStats.pointsVie += Math.min(job.maxStats.pointsVie, this.currentStats.pointsVie + job.baseStats.pointsVie);
        this.currentStats.mouvement += Math.min(job.maxStats.mouvement, this.currentStats.mouvement + job.baseStats.mouvement);
        this.currentStats.force += Math.min(job.maxStats.force, this.currentStats.force + job.baseStats.force);
        this.currentStats.magie += Math.min(job.maxStats.magie, this.currentStats.magie + job.baseStats.magie);
        this.currentStats.technique += Math.min(job.maxStats.technique, this.currentStats.technique + job.baseStats.technique);
        this.currentStats.vitesse += Math.min(job.maxStats.vitesse, this.currentStats.vitesse + job.baseStats.vitesse);
        this.currentStats.chance += Math.min(job.maxStats.chance, this.currentStats.chance + job.baseStats.chance);
        this.currentStats.defense += Math.min(job.maxStats.defense, this.currentStats.defense + job.baseStats.defense);
        this.currentStats.resistance += Math.min(job.maxStats.resistance, this.currentStats.resistance + job.baseStats.resistance);
        this.currentStats.charisme += Math.min(job.maxStats.charisme, this.currentStats.charisme + job.baseStats.charisme);
        this.LevelUp();
        this.maxExperience+=100;
    }
}