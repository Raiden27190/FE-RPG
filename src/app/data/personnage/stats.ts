export class Stats
{
    public pointsVie: number;
    public mouvement: number;
    public force: number;
    public magie: number;
    public technique: number;
    public vitesse: number;
    public chance: number;
    public defense: number;
    public resistance: number;
    public charisme: number;

    constructor(pointsVie:number, movement:number, force:number, magie:number, technique:number, vitesse:number, chance:number, defense:number, resistance:number, charisme:number)
    {
        this.pointsVie=pointsVie;
        this.mouvement=movement;
        this.force=force;
        this.magie=magie;
        this.technique=technique;
        this.vitesse=vitesse;
        this.chance=chance;
        this.defense=defense;
        this.resistance=resistance;
        this.charisme=charisme;
    };
}
