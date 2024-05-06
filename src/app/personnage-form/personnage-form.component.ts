import { CommonModule, NgFor } from '@angular/common';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Personnage } from '../data/personnage/personnage';
import { StatsComponent } from './stats/stats.component';
import { PointsVieComponent } from './stats/points-vie/points-vie.component';
import { JobService } from '../data/personnage/jobs/job.service';
import { Job } from '../data/personnage/jobs/job';
import { InventaireComponent } from './inventaire/inventaire.component';
import { TypeObjet } from '../data/objets/typeObjet';
import { Puissance } from '../data/objets/degats/puissance';
import { TypeDegats } from '../data/objets/degats/typeDegats';

@Component({
  selector: 'app-personnage-form',
  standalone: true,
  imports: [FormsModule, CommonModule, StatsComponent, PointsVieComponent, InventaireComponent],
  templateUrl: './personnage-form.component.html',
  styleUrl: './personnage-form.component.scss'
})
export class PersonnageFormComponent implements OnInit {
  ngOnInit(): void {

    this.personnage.permanentBoosts.magie = 3;
    this.personnage.permanentBoosts.pointsVie = 10;
    this.personnage.pVActuels = this.personnage.job.baseStats.pointsVie + this.personnage.permanentBoosts.pointsVie;
    this.personnage.inventaire.arme = {
      nom: "Récup",
      effet: "Soigne",
      typeObjet: TypeObjet.soin,
      degatsPrincipaux:{
        typeDegats:TypeDegats.soin,
        de:10,
        portee: {
          portee:0,
          zoneDEffet:1
        },
        puissance: Puissance.magique
      },
      degatsSecondaires:{
        typeDegats:TypeDegats.soin,
        de:10,
        portee: {
          portee:1,
          zoneDEffet:0
        },
        puissance: Puissance.magique
      }
    }
    this.personnage.inventaire.defensif = {
      nom:"Anneau Fer",
      typeObjet:TypeObjet.anneau,
      effet:"Protège de la magie",
      bonusStats: {
          pointsVie:0,
          mouvement:0,
          force:0,
          magie:2,
          technique:0,
          vitesse:0,
          chance:0,
          defense:0,
          resistance:3,
          charisme:0
      }
    }
  }
  constructor(private jobService:JobService){
    this.jobService.Init();
    this.personnage = new Personnage("Iriel", 37,162,"F", this.jobService.DonnerJob("soeur"));
  }

  _nextJob:Job|undefined;

  get nextJob(){
    return this._nextJob!;
  }
  set nextJob(value:Job)
  {
    this._nextJob = value;
  }

  personnage:Personnage;

  @ViewChild('form') form!: NgForm;

  onLevelUpClick(){
    this.personnage.LevelUp();
  }

  onNextJobSelectionChanged(value:Job)
  {
    this.nextJob = value;
  }

  onChangeJobCLick(){
    this.personnage.UpgradeJob(this._nextJob!)
    this._nextJob = undefined;
  }
  
  onPvActuelsChanged(newValue:number){
    this.personnage.pVActuels = newValue
  }

  onNouveauPersonnage(){
    this.personnage = new Personnage("",0,0,"", this.jobService.DonnerJob("base"));
    this.personnage.statsActuelles = {
      pointsVie:0,
      mouvement:0,
      force:0,
      magie:0,
      technique:0,
      vitesse:0,
      chance:0,
      defense:0,
      resistance:0,
      charisme:0
    }
    this.personnage.niveau = 0;
  }

}
