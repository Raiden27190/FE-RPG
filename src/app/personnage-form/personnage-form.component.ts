import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Personnage } from '../data/personnage/personnage';
import { Job } from '../data/personnage/job';
import { StatsComponent } from './stats/stats.component';

@Component({
  selector: 'app-personnage-form',
  standalone: true,
  imports: [FormsModule, CommonModule, StatsComponent],
  templateUrl: './personnage-form.component.html',
  styleUrl: './personnage-form.component.scss'
})
export class PersonnageFormComponent implements OnInit {
  ngOnInit(): void {
    this.personnage.permanentBoosts.magie = 3;
  }
  personnage:Personnage = new Personnage("Iriel", 37, 158, "F", Job.soeur)

  xpRestante = this.personnage.maxExperience-this.personnage.experience;

  @ViewChild('form') form!: NgForm;

  onLevelUpClick(){
    this.personnage.LevelUp();
  }
  
}
