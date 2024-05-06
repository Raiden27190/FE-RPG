import { Inventaire } from "./inventaire";
import { Job } from "./jobs/job";
import { Stats } from "./stats";

export class Personnage {
    public nom: string;
    public age: number;
    public taille: number;
    public sexe: string;
    public pVActuels: number;
    public niveau: number;
    public experience: number;
    public maxExperience: number;
    public statsActuelles: Stats;
    public permanentBoosts: Stats;
    public job: Job;
    public inventaire: Inventaire;

    constructor(nom: string, age: number, taille: number, sexe: string, job: Job) {
        this.nom = nom;
        this.age = age;
        this.taille = taille;
        this.sexe = sexe;
        this.niveau = 0;
        this.experience = 0;
        this.maxExperience = 100;
        this.permanentBoosts = {
            pointsVie: 0,
            mouvement: 0,
            force: 0,
            magie: 0,
            technique: 0,
            vitesse: 0,
            chance: 0,
            defense: 0,
            resistance: 0,
            charisme: 0
        };
        this.job = job;
        this.statsActuelles = job.baseStats;
        this.pVActuels = job.baseStats.pointsVie + this.permanentBoosts.pointsVie;
        this.inventaire = {
            divers: [],
            arme: undefined,
            defensif: undefined
        };
        this.LevelUp();
    }

    public LevelUp(): void {
        this.niveau += 1;
        let randomIncrement = Math.ceil(2 * Math.random())
        const randomPVAugment = Math.random()
        this.statsActuelles.pointsVie += randomPVAugment <= this.job.pourcentageIncrementGainNiveau.pointsVie / 100 ? randomIncrement : 0;
        this.pVActuels += randomPVAugment <= this.job.pourcentageIncrementGainNiveau.pointsVie / 100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2 * Math.random());
        this.statsActuelles.mouvement += Math.random() <= this.job.pourcentageIncrementGainNiveau.mouvement / 100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2 * Math.random());
        this.statsActuelles.force += Math.random() <= this.job.pourcentageIncrementGainNiveau.force / 100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2 * Math.random());
        this.statsActuelles.magie += Math.random() <= this.job.pourcentageIncrementGainNiveau.magie / 100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2 * Math.random());
        this.statsActuelles.technique += Math.random() <= this.job.pourcentageIncrementGainNiveau.technique / 100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2 * Math.random());
        this.statsActuelles.vitesse += Math.random() <= this.job.pourcentageIncrementGainNiveau.vitesse / 100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2 * Math.random());
        this.statsActuelles.chance += Math.random() <= this.job.pourcentageIncrementGainNiveau.chance / 100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2 * Math.random());
        this.statsActuelles.defense += Math.random() <= this.job.pourcentageIncrementGainNiveau.defense / 100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2 * Math.random());
        this.statsActuelles.resistance += Math.random() <= this.job.pourcentageIncrementGainNiveau.resistance / 100 ? randomIncrement : 0;
        randomIncrement = Math.ceil(2 * Math.random());
        this.statsActuelles.charisme += Math.random() <= this.job.pourcentageIncrementGainNiveau.charisme / 100 ? randomIncrement : 0;

        this.capperStats();
    }
    private capperStats() {
        const statsNames = Object.keys(this.job.baseStats);
        statsNames.forEach(stat => Reflect.set(this.statsActuelles, stat, Reflect.get(this.job.maxStats, stat) ? Math.min(Reflect.get(this.statsActuelles, stat), Reflect.get(this.job.maxStats, stat)) : Reflect.get(this.statsActuelles, stat)));

    }

    public UpgradeJob(job: Job): void {
        this.job = job;
        this.statsActuelles.pointsVie = Math.min(job.maxStats.pointsVie ? job.maxStats.pointsVie : this.statsActuelles.pointsVie, this.statsActuelles.pointsVie + job.baseStats.pointsVie);
        this.statsActuelles.mouvement = Math.min(job.maxStats.mouvement, this.statsActuelles.mouvement + job.baseStats.mouvement);
        this.statsActuelles.force = Math.min(job.maxStats.force, this.statsActuelles.force + job.baseStats.force);
        this.statsActuelles.magie = Math.min(job.maxStats.magie, this.statsActuelles.magie + job.baseStats.magie);
        this.statsActuelles.technique = Math.min(job.maxStats.technique, this.statsActuelles.technique + job.baseStats.technique);
        this.statsActuelles.vitesse = Math.min(job.maxStats.vitesse, this.statsActuelles.vitesse + job.baseStats.vitesse);
        this.statsActuelles.chance = Math.min(job.maxStats.chance, this.statsActuelles.chance + job.baseStats.chance);
        this.statsActuelles.defense = Math.min(job.maxStats.defense, this.statsActuelles.defense + job.baseStats.defense);
        this.statsActuelles.resistance = Math.min(job.maxStats.resistance, this.statsActuelles.resistance + job.baseStats.resistance);
        this.statsActuelles.charisme = Math.min(job.maxStats.charisme, this.statsActuelles.charisme + job.baseStats.charisme);
        this.LevelUp();
        this.niveau-=1;
        this.maxExperience += 100;
    }
}