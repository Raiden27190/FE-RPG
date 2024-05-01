import { Injectable, OnInit } from '@angular/core';
import { Job } from './job';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }
  public Init(): void {
    this.soeur.jobsSuivants.push(this.pretresse);
    this.soeur.jobsSuivants.push(this.mageLumiere);
    this.listeJobs.push(this.soeur);
    this.listeJobs.push(this.pretresse);
    this.listeJobs.push(this.mageLumiere);
  }

  public DonnerJob(name: string): Job {
    let foundjob = this.listeJobs.find(job => job.name === name);
    if (!foundjob)
      foundjob = {
        rang: 0,
        name: "Inconnu",
        displayName: "Inconnu",
        baseStats: {
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
        },
        maxStats: {
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
        },
        pourcentageIncrementGainNiveau: {
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
        },
        jobsSuivants: [],
        montee: false,
        volante: false,
        niveauMax: 0
      }
    return foundjob;
  }

  private listeJobs: Job[] = [];


  private soeur: Job =
    {
      rang: 0,
      name: "soeur",
      displayName: "Frère / Sœur",
      baseStats: {
        pointsVie: 15,
        mouvement: 4,
        force: 5,
        magie: 15,
        technique: 10,
        vitesse: 10,
        chance: 5,
        defense: 10,
        resistance: 12,
        charisme: 10
      },
      maxStats: {
        pointsVie: 0,
        mouvement: 10,
        force: 55,
        magie: 55,
        technique: 40,
        vitesse: 40,
        chance: 40,
        defense: 40,
        resistance: 40,
        charisme: 40
      },
      pourcentageIncrementGainNiveau: {
        pointsVie: 100,
        mouvement: 30,
        force: 10,
        magie: 95,
        technique: 20,
        vitesse: 20,
        chance: 30,
        defense: 40,
        resistance: 60,
        charisme: 60
      },
      jobsSuivants: [],
      montee: false,
      volante: false,
      niveauMax: 20
    }

  private pretresse: Job =
    {
      rang: 1,
      name: "pretresse",
      displayName: "Prêtre / Prêtresse",
      baseStats: {
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
      },
      maxStats: {
        pointsVie: 0,
        mouvement: 10,
        force: 110,
        magie: 110,
        technique: 80,
        vitesse: 80,
        chance: 80,
        defense: 80,
        resistance: 80,
        charisme: 80
      },
      pourcentageIncrementGainNiveau: {
        pointsVie: 100,
        mouvement: 30,
        force: 10,
        magie: 100,
        technique: 25,
        vitesse: 20,
        chance: 35,
        defense: 45,
        resistance: 60,
        charisme: 60
      },
      jobsSuivants: [],
      montee: false,
      volante: false,
      niveauMax: 40
    }

  private mageLumiere: Job =
    {
      rang: 1,
      name: "mageLumiere",
      displayName: "Mage de lumière",
      baseStats: {
        pointsVie: 0,
        mouvement: 0,
        force: 0,
        magie: 5,
        technique: 0,
        vitesse: 0,
        chance: 0,
        defense: 0,
        resistance: 0,
        charisme: 0
      },
      maxStats: {
        pointsVie: 0,
        mouvement: 10,
        force: 110,
        magie: 110,
        technique: 80,
        vitesse: 80,
        chance: 80,
        defense: 80,
        resistance: 80,
        charisme: 80
      },
      pourcentageIncrementGainNiveau: {
        pointsVie: 100,
        mouvement: 30,
        force: 10,
        magie: 100,
        technique: 25,
        vitesse: 20,
        chance: 35,
        defense: 45,
        resistance: 60,
        charisme: 60
      },
      jobsSuivants: [],
      montee: false,
      volante: false,
      niveauMax: 40
    }

}
