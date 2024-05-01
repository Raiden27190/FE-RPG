import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Personnage } from '../data/personnage/personnage';
import { Job } from '../data/personnage/jobs/job';
import { StatsComponent } from './stats/stats.component';
import { PointsVieComponent } from './stats/points-vie/points-vie.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-personnage-form',
  standalone: true,
  imports: [FormsModule, CommonModule, StatsComponent, PointsVieComponent],
  templateUrl: './personnage-form.component.html',
  styleUrl: './personnage-form.component.scss'
})
export class PersonnageFormComponent implements OnInit {
  ngOnInit(): void {
    this.personnage.permanentBoosts.magie = 3;
    this.personnage.permanentBoosts.pointsVie = 10;
    this.personnage.pVActuels = this.personnage.job.baseStats.pointsVie + this.personnage.permanentBoosts.pointsVie;
    this.personnage.inventaire.defensif = {
      nom:"Anneau Fer",
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
  personnage:Personnage = new Personnage("Iriel", 37, 158, "F", Job.soeur)

  xpRestante = this.personnage.maxExperience-this.personnage.experience;

  @ViewChild('form') form!: NgForm;

  onLevelUpClick(){
    this.personnage.LevelUp();
  }
  
}
