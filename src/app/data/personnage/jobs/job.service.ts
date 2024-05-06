import { Injectable } from '@angular/core';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  public Init(): void {
    // Arbre soldat
    this.InitSoldat();

    // Arbre Combattant
    this.InitCombattant();

    // Arbre Magie lumière Soins
    this.InitSoeur();

    // Arbre Voleur
    this.InitVoleur();

    // Arbre cavaliers aériens
    this.InitCavAerien();

    // Arbre cavaliers
    this.InitCavalier();

    // Arbre Archer
    this.InitArcher();

    // Arbre Mage
    this.InitMage();

    // Arbre Nobles
    this.InitNobles();

    // Arbre Epéiste
    this.InitEpeiste();

    // Laguz
    this.InitLaguz();

    // Barde
    this.listeJobs.push(this.barde);
    this.listeJobs.filter(job => job.rang === 1).forEach(jobRangUn => 
      this.barde.jobsSuivants.push(jobRangUn)
    );

    // Base
    this.listeJobs.push(this.base);
    this.listeJobs.filter(job => job.rang === 0).forEach(jobRangZero =>
      this.base.jobsSuivants.push(jobRangZero)
    );
  }

  //#region Initialisations

  private InitLaguz() {
    this.listeJobs.push(
      this.chat, this.tigre, this.lion,
      this.corbeau, this.faucon, this.heron,
      this.dragonRouge, this.dragonNoir, this.dragonBlanc,
      this.loup, this.ulfhedin, this.kitsune, this.taguel
    );
  }

  private InitEpeiste() {
    this.bretteur.jobsSuivants.push(this.asura);
    this.terreur.jobsSuivants.push(this.yakasha);
    this.myrmidon.jobsSuivants.push(this.bretteur);
    this.mercenaire.jobsSuivants.push(this.terreur);
    this.epeiste.jobsSuivants.push(this.myrmidon, this.mercenaire);

    this.listeJobs.push(
      this.epeiste,
      this.myrmidon, this.mercenaire,
      this.bretteur, this.terreur,
      this.asura, this.yakasha
    );
  }

  private InitNobles() {
    this.nobleMage.jobsSuivants.push(this.grandLord);
    this.herosMage.jobsSuivants.push(this.conquerant);
    this.noble.jobsSuivants.push(this.nobleMage);
    this.heros.jobsSuivants.push(this.herosMage);
    this.lord.jobsSuivants.push(this.noble, this.heros);

    this.listeJobs.push(
      this.lord,
      this.noble, this.heros,
      this.nobleMage, this.herosMage,
      this.grandLord, this.conquerant
    );
  }

  private InitMage() {
    this.druide.jobsSuivants.push(this.archimage);
    this.gremory.jobsSuivants.push(this.necromancien);
    this.sage.jobsSuivants.push(this.druide);
    this.shaman.jobsSuivants.push(this.gremory);
    this.mageElementaire.jobsSuivants.push(this.sage);
    this.mageTenebres.jobsSuivants.push(this.shaman);

    this.listeJobs.push(
      this.mageElementaire, this.mageTenebres,
      this.sage, this.shaman,
      this.druide, this.gremory,
      this.archimage, this.necromancien
    );
  }

  private InitArcher() {
    this.balistaire.jobsSuivants.push(this.machiniste);
    this.sniper.jobsSuivants.push(this.balistaire);
    this.ranger.jobsSuivants.push(this.chevalierArc, this.chevalierKinshi);
    this.rodeur.jobsSuivants.push(this.ranger);
    this.archer.jobsSuivants.push(this.sniper, this.rodeur);

    this.listeJobs.push(
      this.archer,
      this.sniper, this.rodeur,
      this.balistaire, this.ranger,
      this.machiniste, this.chevalierArc, this.chevalierKinshi
    );
  }

  private InitCavalier() {
    this.chevalierArgent.jobsSuivants.push(this.chevalierOr);
    this.grandChevalier.jobsSuivants.push(this.chevalierArgent);
    this.chevalierSacre.jobsSuivants.push(this.skogul);
    this.paladin.jobsSuivants.push(this.chevalierSacre);
    this.cavalier.jobsSuivants.push(this.grandChevalier, this.paladin);

    this.listeJobs.push(
      this.cavalier,
      this.grandChevalier, this.paladin,
      this.chevalierArgent, this.chevalierSacre,
      this.chevalierOr, this.skogul
    );
  }

  private InitCavAerien() {
    this.cavalierSleipnir.jobsSuivants.push(this.seigneurSleipnir);
    this.lordFaucon.jobsSuivants.push(this.seigneurFaucon);
    this.belliciste.jobsSuivants.push(this.seigneurBelliciste);
    this.lordGriffon.jobsSuivants.push(this.lordGriffon);
    this.pegaseNoir.jobsSuivants.push(this.cavalierSleipnir);
    this.chevalierFaucon.jobsSuivants.push(this.lordFaucon);
    this.lordWyverne.jobsSuivants.push(this.belliciste);
    this.chevalierGriffon.jobsSuivants.push(this.lordFaucon);
    this.cavalierPegase.jobsSuivants.push(this.pegaseNoir, this.chevalierFaucon);
    this.cavalierWyverne.jobsSuivants.push(this.lordWyverne, this.chevalierGriffon);

    this.listeJobs.push(
      this.cavalierPegase, this.cavalierWyverne,
      this.pegaseNoir, this.chevalierFaucon, this.lordWyverne, this.chevalierGriffon,
      this.cavalierSleipnir, this.lordFaucon, this.belliciste, this.lordGriffon,
      this.seigneurSleipnir, this.seigneurFaucon, this.seigneurBelliciste, this.seigneurGriffon
    );
  }

  private InitVoleur() {
    this.maitreNinja.jobsSuivants.push(this.assassin);
    this.ninja.jobsSuivants.push(this.maitreNinja);
    this.baladin.jobsSuivants.push(this.espion);
    this.escroc.jobsSuivants.push(this.baladin);
    this.voleur.jobsSuivants.push(this.escroc, this.ninja);

    this.listeJobs.push(
      this.voleur,
      this.ninja, this.escroc,
      this.maitreNinja, this.baladin,
      this.assassin, this.espion
    );
  }

  private InitSoeur() {
    this.saint.jobsSuivants.push(this.apotre);
    this.moineGuerrier.jobsSuivants.push(this.invocateur);
    this.sageQilin.jobsSuivants.push(this.valkyrie);
    this.pretresse.jobsSuivants.push(this.saint, this.moineGuerrier);
    this.clerc.jobsSuivants.push(this.saint, this.moineGuerrier);
    this.cavalierMage.jobsSuivants.push(this.sageQilin);
    this.troubadour.jobsSuivants.push(this.cavalierMage);
    this.mageLumiere.jobsSuivants.push(this.clerc);
    this.soeur.jobsSuivants.push(this.pretresse);

    this.listeJobs.push(
      this.soeur, this.mageLumiere, this.troubadour,
      this.clerc, this.pretresse, this.cavalierMage,
      this.saint, this.moineGuerrier, this.sageQilin,
      this.apotre, this.invocateur, this.valkyrie
    );
  }

  private InitCombattant() {
    this.generalHache.jobsSuivants.push(this.marechal);
    this.maitreHache.jobsSuivants.push(this.berserker);
    this.chevalierHache.jobsSuivants.push(this.generalHache);
    this.guerrier.jobsSuivants.push(this.maitreHache);
    this.combattant.jobsSuivants.push(this.chevalierHache, this.guerrier);

    this.listeJobs.push(
      this.combattant,
      this.chevalierHache, this.guerrier,
      this.generalHache, this.maitreHache,
      this.berserker
    );
  }

  private InitSoldat() {
    this.generalLance.jobsSuivants.push(this.marechal);
    this.chevalierLance.jobsSuivants.push(this.generalLance);
    this.maitreLancier.jobsSuivants.push(this.basara);
    this.hallebardier.jobsSuivants.push(this.maitreLancier);
    this.soldat.jobsSuivants.push(this.chevalierLance, this.hallebardier);
    this.listeJobs.push(
      this.soldat,
      this.chevalierLance, this.hallebardier,
      this.generalLance, this.maitreLancier,
      this.marechal, this.basara
    );
  }

  //#endregion

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

  public DonnerJobsDepart(): Job[] {
    return this.listeJobs.filter(job => job.rang === 0);
  }

  private listeJobs: Job[] = [];

  //#region Jobs

  //#region Soigneurs

  private soeur: Job = {
    rang: 0,
    name: "soeur",
    displayName: "Frère / Sœur",
    baseStats: {
      pointsVie: 18,
      mouvement: 4,
      force: 0,
      magie: 1,
      technique: 2,
      vitesse: 2,
      chance: 0,
      defense: 1,
      resistance: 6,
      charisme: 10
    },
    maxStats: {
      pointsVie: 60,
      mouvement: 10,
      force: 20,
      magie: 27,
      technique: 23,
      vitesse: 25,
      chance: 32,
      defense: 21,
      resistance: 28,
      charisme: 0
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 50,
      mouvement: 0,
      force: 35,
      magie: 65,
      technique: 25,
      vitesse: 40,
      chance: 60,
      defense: 15,
      resistance: 55,
      charisme: 50
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 20
  }

  private mageLumiere: Job = {
    rang: 0,
    name: "mageLumiere",
    displayName: "Mage Lumière",
    baseStats: {
      pointsVie: 18,
      mouvement: 4,
      force: 0,
      magie: 1,
      technique: 1,
      vitesse: 2,
      chance: 0,
      defense: 1,
      resistance: 5,
      charisme: 0
    },
    maxStats: {
      pointsVie: 60,
      mouvement: 10,
      force: 23,
      magie: 27,
      technique: 26,
      vitesse: 26,
      chance: 30,
      defense: 23,
      resistance: 29,
      charisme: 0
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 55,
      mouvement: 0,
      force: 30,
      magie: 65,
      technique: 50,
      vitesse: 40,
      chance: 25,
      defense: 15,
      resistance: 55,
      charisme: 50
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 20
  }

  private pretresse: Job = {
    rang: 1,
    name: "pretresse",
    displayName: "Evêque / Prêtresse",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 0,
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

  private clerc: Job = {
    rang: 1,
    name: "clerc",
    displayName: "Clerc / Cléresse",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 0,
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

  private saint: Job = {
    rang: 2,
    name: "saint",
    displayName: "Saint(e)",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      force: 165,
      magie: 165,
      technique: 120,
      vitesse: 120,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 15,
      magie: 100,
      technique: 30,
      vitesse: 25,
      chance: 35,
      defense: 50,
      resistance: 65,
      charisme: 65
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 60
  }

  private moineGuerrier: Job = {
    rang: 2,
    name: "moineGuerrier",
    displayName: "Moine / Sœur Guerrier(e)",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      force: 165,
      magie: 165,
      technique: 120,
      vitesse: 120,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 40,
      magie: 85,
      technique: 30,
      vitesse: 35,
      chance: 35,
      defense: 45,
      resistance: 50,
      charisme: 60
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 60
  }

  private apotre: Job = {
    rang: 3,
    name: "apotre",
    displayName: "Apôtre",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 5,
      technique: 0,
      vitesse: 5,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 220,
      magie: 225,
      technique: 160,
      vitesse: 165,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 25,
      magie: 100,
      technique: 40,
      vitesse: 30,
      chance: 35,
      defense: 60,
      resistance: 70,
      charisme: 70
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 80
  }

  private invocateur: Job = {
    rang: 3,
    name: "invocateur",
    displayName: "Invocateur",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 5,
      technique: 0,
      vitesse: 0,
      chance: 0,
      defense: 0,
      resistance: 5,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 220,
      magie: 225,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 160,
      resistance: 165,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 40,
      magie: 85,
      technique: 40,
      vitesse: 30,
      chance: 35,
      defense: 50,
      resistance: 75,
      charisme: 70
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 80
  }

  private troubadour: Job = {
    rang: 0,
    name: "troubadour",
    displayName: "Troubadour",
    baseStats: {
      pointsVie: 15,
      mouvement: 6,
      force: 0,
      magie: 1,
      technique: 1,
      vitesse: 3,
      chance: 0,
      defense: 2,
      resistance: 5,
      charisme: 10
    },
    maxStats: {
      pointsVie: 60,
      mouvement: 12,
      force: 17,
      magie: 28,
      technique: 25,
      vitesse: 26,
      chance: 33,
      defense: 17,
      resistance: 30,
      charisme: 0
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 45,
      mouvement: 0,
      force: 25,
      magie: 60,
      technique: 45,
      vitesse: 45,
      chance: 65,
      defense: 15,
      resistance: 50,
      charisme: 50
    },
    jobsSuivants: [],
    montee: true,
    volante: false,
    niveauMax: 20
  }

  private cavalierMage: Job = {
    rang: 1,
    name: "cavalierMage",
    displayName: "Cavalier-Mage",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 12,
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
      mouvement: 0,
      force: 15,
      magie: 90,
      technique: 25,
      vitesse: 55,
      chance: 20,
      defense: 45,
      resistance: 55,
      charisme: 50
    },
    jobsSuivants: [],
    montee: true,
    volante: false,
    niveauMax: 40
  }

  private sageQilin: Job = {
    rang: 2,
    name: "sageQilin",
    displayName: "Sage Qilin",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 12,
      force: 165,
      magie: 165,
      technique: 120,
      vitesse: 120,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 20,
      magie: 95,
      technique: 30,
      vitesse: 60,
      chance: 25,
      defense: 50,
      resistance: 60,
      charisme: 55
    },
    jobsSuivants: [],
    montee: true,
    volante: false,
    niveauMax: 60
  }

  private valkyrie: Job = {
    rang: 3,
    name: "valkyrie",
    displayName: "Valkyrie",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 0,
      technique: 0,
      vitesse: 5,
      chance: 0,
      defense: 0,
      resistance: 5,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 220,
      magie: 220,
      technique: 220,
      vitesse: 165,
      chance: 160,
      defense: 160,
      resistance: 165,
      charisme: 160
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 25,
      magie: 100,
      technique: 40,
      vitesse: 75,
      chance: 30,
      defense: 55,
      resistance: 75,
      charisme: 60
    },
    jobsSuivants: [],
    montee: true,
    volante: false,
    niveauMax: 80
  }

  //#endregion

  //#region Soldat

  private soldat: Job = {
    displayName: "Soldat",
    name: "soldat",
    baseStats: {
      pointsVie: 20,
      mouvement: 4,
      force: 3,
      magie: 0,
      technique: 0,
      vitesse: 1,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 0
    },
    maxStats: {
      pointsVie: 60,
      mouvement: 10,
      force: 31,
      magie: 19,
      technique: 19,
      vitesse: 19,
      chance: 33,
      defense: 21,
      resistance: 19,
      charisme: 0
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 80,
      mouvement: 0,
      force: 60,
      magie: 35,
      technique: 35,
      vitesse: 30,
      chance: 30,
      defense: 55,
      resistance: 20,
      charisme: 50
    },
    montee: false,
    volante: false,
    rang: 0,
    niveauMax: 20,
    jobsSuivants: []
  }

  private chevalierLance: Job = {
    displayName: "Chevalier-Lance",
    name: "chevalierLance",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 0,
      force: 90,
      magie: 20,
      technique: 35,
      vitesse: 40,
      chance: 20,
      defense: 75,
      resistance: 55,
      charisme: 30
    },
    montee: false,
    volante: false,
    rang: 1,
    niveauMax: 40,
    jobsSuivants: []
  }

  private generalLance: Job = {
    displayName: "Général-Lance",
    name: "generalLance",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 0,
      technique: 0,
      vitesse: 0,
      chance: 0,
      defense: 5,
      resistance: 0,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 165,
      magie: 165,
      technique: 120,
      vitesse: 120,
      chance: 120,
      defense: 125,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 95,
      magie: 20,
      technique: 45,
      vitesse: 50,
      chance: 20,
      defense: 85,
      resistance: 65,
      charisme: 30
    },
    montee: false,
    volante: false,
    rang: 2,
    niveauMax: 60,
    jobsSuivants: []
  }

  private marechal: Job = {
    displayName: "Maréchal",
    name: "marechal",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 5,
      magie: 0,
      technique: 0,
      vitesse: 0,
      chance: 0,
      defense: 5,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 225,
      magie: 220,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 165,
      resistance: 160,
      charisme: 130
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 100,
      magie: 30,
      technique: 50,
      vitesse: 55,
      chance: 25,
      defense: 90,
      resistance: 70,
      charisme: 35
    },
    montee: false,
    volante: false,
    rang: 3,
    niveauMax: 80,
    jobsSuivants: []
  }

  private hallebardier: Job = {
    displayName: "Hallebardier",
    name: "hallebardier",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 0,
      technique: 0,
      vitesse: 5,
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
      vitesse: 85,
      chance: 80,
      defense: 80,
      resistance: 80,
      charisme: 80
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 90,
      magie: 25,
      technique: 45,
      vitesse: 50,
      chance: 20,
      defense: 50,
      resistance: 50,
      charisme: 30
    },
    montee: false,
    volante: false,
    rang: 1,
    niveauMax: 40,
    jobsSuivants: []
  }

  private maitreLancier: Job = {
    displayName: "Maître Lancier",
    name: "maitreLancier",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 5,
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
      force: 170,
      magie: 165,
      technique: 120,
      vitesse: 125,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 95,
      magie: 45,
      technique: 50,
      vitesse: 55,
      chance: 20,
      defense: 50,
      resistance: 50,
      charisme: 35
    },
    montee: false,
    volante: false,
    rang: 2,
    niveauMax: 60,
    jobsSuivants: []
  }

  private basara: Job = {
    rang: 3,
    displayName: "Basara",
    name: "Basara",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 5,
      magie: 0,
      technique: 0,
      vitesse: 5,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 230,
      magie: 220,
      technique: 160,
      vitesse: 165,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 95,
      magie: 45,
      technique: 50,
      vitesse: 55,
      chance: 20,
      defense: 50,
      resistance: 50,
      charisme: 35
    },
    montee: false,
    volante: false,
    niveauMax: 80,
    jobsSuivants: []
  }

  //#endregion

  //#region Combattant

  private combattant: Job = {
    rang: 0,
    displayName: "Combattant",
    name: "combattant",
    baseStats: {
      pointsVie: 20,
      mouvement: 4,
      force: 5,
      magie: 0,
      technique: 2,
      vitesse: 4,
      chance: 0,
      defense: 2,
      resistance: 0,
      charisme: 0
    },
    maxStats: {
      pointsVie: 60,
      mouvement: 10,
      force: 32,
      magie: 18,
      technique: 27,
      vitesse: 26,
      chance: 29,
      defense: 25,
      resistance: 21,
      charisme: 0
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 80,
      mouvement: 0,
      force: 65,
      magie: 30,
      technique: 40,
      vitesse: 20,
      chance: 40,
      defense: 25,
      resistance: 20,
      charisme: 50
    },
    montee: false,
    volante: false,
    niveauMax: 20,
    jobsSuivants: []
  }

  private chevalierHache: Job = {
    rang: 1,
    displayName: "Chevalier-Hache",
    name: "chevalierHache",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 0,
      force: 90,
      magie: 20,
      technique: 35,
      vitesse: 40,
      chance: 20,
      defense: 75,
      resistance: 55,
      charisme: 30
    },
    montee: false,
    volante: false,
    niveauMax: 40,
    jobsSuivants: []
  }

  private generalHache: Job = {
    rang: 2,
    displayName: "Général-Hache",
    name: "generalHache",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 0,
      technique: 0,
      vitesse: 0,
      chance: 0,
      defense: 5,
      resistance: 0,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 165,
      magie: 165,
      technique: 120,
      vitesse: 120,
      chance: 120,
      defense: 125,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 95,
      magie: 20,
      technique: 45,
      vitesse: 50,
      chance: 20,
      defense: 85,
      resistance: 65,
      charisme: 30
    },
    montee: false,
    volante: false,
    niveauMax: 60,
    jobsSuivants: []
  }

  private guerrier: Job = {
    rang: 1,
    displayName: "Guerrier",
    name: "guerrier",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 5,
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
      force: 115,
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
      mouvement: 0,
      force: 90,
      magie: 25,
      technique: 45,
      vitesse: 50,
      chance: 20,
      defense: 50,
      resistance: 50,
      charisme: 30
    },
    montee: false,
    volante: false,
    niveauMax: 40,
    jobsSuivants: []
  }

  private maitreHache: Job = {
    displayName: "Maître Hache",
    name: "maitreHache",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      force: 170,
      magie: 165,
      technique: 120,
      vitesse: 125,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 95,
      magie: 45,
      technique: 50,
      vitesse: 55,
      chance: 20,
      defense: 50,
      resistance: 50,
      charisme: 35
    },
    montee: false,
    volante: false,
    rang: 2,
    niveauMax: 60,
    jobsSuivants: []
  }

  private berserker: Job = {
    rang: 3,
    displayName: "Berserker",
    name: "berserker",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 5,
      magie: 0,
      technique: 0,
      vitesse: 5,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 230,
      magie: 220,
      technique: 160,
      vitesse: 165,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 95,
      magie: 45,
      technique: 50,
      vitesse: 55,
      chance: 20,
      defense: 50,
      resistance: 50,
      charisme: 35
    },
    montee: false,
    volante: false,
    niveauMax: 80,
    jobsSuivants: []
  }

  //#endregion

  //#region Voleur

  private voleur: Job = {
    rang: 0,
    displayName: "Voleur",
    name: "voleur",
    baseStats: {
      pointsVie: 16,
      mouvement: 4,
      force: 3,
      magie: 0,
      technique: 1,
      vitesse: 9,
      chance: 0,
      defense: 2,
      resistance: 0,
      charisme: 0
    },
    maxStats: {
      pointsVie: 60,
      mouvement: 10,
      force: 23,
      magie: 19,
      technique: 32,
      vitesse: 30,
      chance: 28,
      defense: 20,
      resistance: 20,
      charisme: 0
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 75,
      mouvement: 0,
      force: 50,
      magie: 25,
      technique: 40,
      vitesse: 65,
      chance: 45,
      defense: 25,
      resistance: 20,
      charisme: 50
    },
    montee: false,
    volante: false,
    niveauMax: 20,
    jobsSuivants: []
  }

  private escroc: Job = {
    rang: 1,
    name: "escroc",
    displayName: "Escroc",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 0,
      technique: 5,
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
      technique: 85,
      vitesse: 80,
      chance: 80,
      defense: 80,
      resistance: 80,
      charisme: 80
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 90,
      magie: 25,
      technique: 45,
      vitesse: 40,
      chance: 20,
      defense: 60,
      resistance: 45,
      charisme: 30
    },
    montee: false,
    volante: false,
    niveauMax: 40,
    jobsSuivants: []
  }

  private baladin: Job = {
    rang: 2,
    name: "baladin",
    displayName: "Baladin",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      force: 165,
      magie: 165,
      technique: 125,
      vitesse: 120,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 90,
      magie: 40,
      technique: 55,
      vitesse: 45,
      chance: 20,
      defense: 65,
      resistance: 50,
      charisme: 30
    },
    montee: false,
    volante: false,
    niveauMax: 60,
    jobsSuivants: []
  }

  private espion: Job = {
    rang: 3,
    name: "espion",
    displayName: "Espion",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 0,
      technique: 0,
      vitesse: 5,
      chance: 0,
      defense: 5,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 220,
      magie: 220,
      technique: 165,
      vitesse: 165,
      chance: 160,
      defense: 165,
      resistance: 160,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 95,
      magie: 40,
      technique: 65,
      vitesse: 60,
      chance: 20,
      defense: 75,
      resistance: 50,
      charisme: 35
    },
    montee: false,
    volante: false,
    niveauMax: 80,
    jobsSuivants: []
  }

  private ninja: Job = {
    rang: 1,
    name: "ninja",
    displayName: "Ninja",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 0,
      technique: 0,
      vitesse: 5,
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
      vitesse: 85,
      chance: 80,
      defense: 80,
      resistance: 80,
      charisme: 80
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 85,
      magie: 35,
      technique: 30,
      vitesse: 55,
      chance: 20,
      defense: 60,
      resistance: 45,
      charisme: 30
    },
    montee: false,
    volante: false,
    niveauMax: 40,
    jobsSuivants: []
  }

  private maitreNinja: Job = {
    rang: 2,
    name: "maitreNinja",
    displayName: "Maître Ninja",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      force: 165,
      magie: 170,
      technique: 120,
      vitesse: 125,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 90,
      magie: 55,
      technique: 55,
      vitesse: 50,
      chance: 25,
      defense: 65,
      resistance: 55,
      charisme: 35
    },
    montee: false,
    volante: false,
    niveauMax: 60,
    jobsSuivants: []
  }

  private assassin: Job = {
    rang: 3,
    name: "assassin",
    displayName: "Assassin",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 5,
      magie: 0,
      technique: 0,
      vitesse: 5,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 225,
      magie: 225,
      technique: 160,
      vitesse: 170,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 95,
      magie: 60,
      technique: 60,
      vitesse: 65,
      chance: 25,
      defense: 65,
      resistance: 55,
      charisme: 40
    },
    montee: false,
    volante: false,
    niveauMax: 80,
    jobsSuivants: []
  }
  //#endregion

  //#region Cavaliers Aériens

  private cavalierPegase: Job = {
    rang: 0,
    name: "cavalierPegase",
    displayName: "Cavalier(e) Pégase",
    baseStats: {
      pointsVie: 14,
      mouvement: 6,
      force: 4,
      magie: 0,
      technique: 5,
      vitesse: 5,
      chance: 0,
      defense: 3,
      resistance: 2,
      charisme: 3
    },
    maxStats: {
      pointsVie: 60,
      mouvement: 12,
      force: 25,
      magie: 23,
      technique: 30,
      vitesse: 30,
      chance: 30,
      defense: 22,
      resistance: 26,
      charisme: 0
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 70,
      mouvement: 0,
      force: 60,
      magie: 30,
      technique: 55,
      vitesse: 60,
      chance: 50,
      defense: 30,
      resistance: 30,
      charisme: 50
    },
    jobsSuivants: [],
    montee: true,
    volante: true,
    niveauMax: 20
  }

  private pegaseNoir: Job = {
    rang: 1,
    name: "pegaseNoir",
    displayName: "Pégase Noir",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 12,
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
      mouvement: 0,
      force: 65,
      magie: 55,
      technique: 25,
      vitesse: 40,
      chance: 20,
      defense: 45,
      resistance: 45,
      charisme: 20
    },
    jobsSuivants: [],
    montee: true,
    volante: true,
    niveauMax: 40
  }

  private chevalierFaucon: Job = {
    rang: 1,
    name: "chevalierFaucon",
    displayName: "Chevalier Faucon",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 12,
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
      mouvement: 0,
      force: 70,
      magie: 60,
      technique: 25,
      vitesse: 40,
      chance: 20,
      defense: 45,
      resistance: 45,
      charisme: 20
    },
    jobsSuivants: [],
    montee: true,
    volante: true,
    niveauMax: 40
  }

  private cavalierSleipnir: Job = {
    rang: 2,
    name: "cavalierSleipnir",
    displayName: "Cavalier Sleipnir",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 12,
      force: 165,
      magie: 165,
      technique: 120,
      vitesse: 120,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 70,
      magie: 75,
      technique: 35,
      vitesse: 45,
      chance: 20,
      defense: 50,
      resistance: 50,
      charisme: 20
    },
    jobsSuivants: [],
    montee: true,
    volante: true,
    niveauMax: 60
  }

  private lordFaucon: Job = {
    rang: 2,
    name: "lordFaucon",
    displayName: "Lord Faucon",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 12,
      force: 165,
      magie: 165,
      technique: 120,
      vitesse: 120,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 85,
      magie: 60,
      technique: 30,
      vitesse: 45,
      chance: 20,
      defense: 50,
      resistance: 50,
      charisme: 25
    },
    jobsSuivants: [],
    montee: true,
    volante: true,
    niveauMax: 60
  }

  private seigneurSleipnir: Job = {
    rang: 3,
    name: "seigneurSleipnir",
    displayName: "Seigneur Sleipnir",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 5,
      magie: 5,
      technique: 0,
      vitesse: 0,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 225,
      magie: 225,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 75,
      magie: 85,
      technique: 40,
      vitesse: 50,
      chance: 25,
      defense: 55,
      resistance: 55,
      charisme: 30
    },
    jobsSuivants: [],
    montee: true,
    volante: true,
    niveauMax: 80
  }

  private seigneurFaucon: Job = {
    rang: 3,
    name: "seigneurFaucon",
    displayName: "Seigneur Faucon",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 5,
      magie: 5,
      technique: 0,
      vitesse: 0,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 225,
      magie: 225,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 90,
      magie: 65,
      technique: 35,
      vitesse: 50,
      chance: 25,
      defense: 55,
      resistance: 55,
      charisme: 35
    },
    jobsSuivants: [],
    montee: true,
    volante: true,
    niveauMax: 80
  }

  private cavalierWyverne: Job = {
    rang: 0,
    name: "cavalierWyverne",
    displayName: "Cavalier(e) Wyverne",
    baseStats: {
      pointsVie: 20,
      mouvement: 6,
      force: 9,
      magie: 0,
      technique: 5,
      vitesse: 7,
      chance: 0,
      defense: 7,
      resistance: 1,
      charisme: 3
    },
    maxStats: {
      pointsVie: 60,
      mouvement: 10,
      force: 31,
      magie: 20,
      technique: 23,
      vitesse: 23,
      chance: 30,
      defense: 30,
      resistance: 18,
      charisme: 0
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 80,
      mouvement: 0,
      force: 60,
      magie: 30,
      technique: 40,
      vitesse: 45,
      chance: 35,
      defense: 35,
      resistance: 40,
      charisme: 50
    },
    jobsSuivants: [],
    montee: true,
    volante: true,
    niveauMax: 20
  }

  private lordWyverne: Job = {
    rang: 1,
    name: "lordWyverne",
    displayName: "Lord Wyverne",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 12,
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
      mouvement: 0,
      force: 70,
      magie: 50,
      technique: 25,
      vitesse: 40,
      chance: 20,
      defense: 45,
      resistance: 45,
      charisme: 20
    },
    jobsSuivants: [],
    montee: true,
    volante: true,
    niveauMax: 40
  }

  private chevalierGriffon: Job = {
    rang: 1,
    name: "chevalierGriffon",
    displayName: "Chevalier Griffon",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 12,
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
      mouvement: 0,
      force: 80,
      magie: 40,
      technique: 25,
      vitesse: 40,
      chance: 20,
      defense: 45,
      resistance: 45,
      charisme: 20
    },
    jobsSuivants: [],
    montee: true,
    volante: true,
    niveauMax: 40
  }

  private belliciste: Job = {
    rang: 2,
    name: "belliciste",
    displayName: "Belliciste",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 12,
      force: 165,
      magie: 165,
      technique: 120,
      vitesse: 120,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 80,
      magie: 75,
      technique: 35,
      vitesse: 45,
      chance: 20,
      defense: 45,
      resistance: 45,
      charisme: 20
    },
    jobsSuivants: [],
    montee: true,
    volante: true,
    niveauMax: 60
  }

  private lordGriffon: Job = {
    rang: 2,
    name: "lordGriffon",
    displayName: "Lord Griffon",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 12,
      force: 165,
      magie: 165,
      technique: 120,
      vitesse: 120,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 90,
      magie: 45,
      technique: 30,
      vitesse: 45,
      chance: 20,
      defense: 55,
      resistance: 55,
      charisme: 25
    },
    jobsSuivants: [],
    montee: true,
    volante: true,
    niveauMax: 60
  }

  private seigneurBelliciste: Job = {
    rang: 3,
    name: "seigneurBelliciste",
    displayName: "Seigneur Belliciste",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 5,
      magie: 5,
      technique: 0,
      vitesse: 0,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 225,
      magie: 225,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 85,
      magie: 85,
      technique: 40,
      vitesse: 50,
      chance: 25,
      defense: 55,
      resistance: 55,
      charisme: 30
    },
    jobsSuivants: [],
    montee: true,
    volante: true,
    niveauMax: 80
  }

  private seigneurGriffon: Job = {
    rang: 3,
    name: "seigneurGriffon",
    displayName: "Seigneur Griffon",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 5,
      magie: 5,
      technique: 0,
      vitesse: 0,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 225,
      magie: 225,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 95,
      magie: 65,
      technique: 35,
      vitesse: 50,
      chance: 25,
      defense: 55,
      resistance: 55,
      charisme: 35
    },
    jobsSuivants: [],
    montee: true,
    volante: true,
    niveauMax: 80
  }

  //#endregion

  //#region Cavaliers

  private cavalier: Job = {
    rang: 0,
    name: "cavalier",
    displayName: "Cavalier",
    baseStats: {
      pointsVie: 20,
      mouvement: 6,
      force: 5,
      magie: 0,
      technique: 2,
      vitesse: 5,
      chance: 0,
      defense: 6,
      resistance: 0,
      charisme: 0
    },
    maxStats: {
      pointsVie: 60,
      mouvement: 12,
      force: 28,
      magie: 19,
      technique: 27,
      vitesse: 27,
      chance: 30,
      defense: 28,
      resistance: 26,
      charisme: 0
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 80,
      mouvement: 0,
      force: 60,
      magie: 30,
      technique: 40,
      vitesse: 50,
      chance: 40,
      defense: 40,
      resistance: 30,
      charisme: 50
    },
    jobsSuivants: [],
    montee: true,
    volante: false,
    niveauMax: 20
  }

  private grandChevalier: Job = {
    rang: 1,
    name: "grandChevalier",
    displayName: "Grand Chevalier",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 12,
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
      mouvement: 0,
      force: 85,
      magie: 15,
      technique: 30,
      vitesse: 50,
      chance: 10,
      defense: 55,
      resistance: 35,
      charisme: 30
    },
    jobsSuivants: [],
    montee: true,
    volante: false,
    niveauMax: 40
  }

  private chevalierArgent: Job = {
    rang: 2,
    name: "chevalierArgent",
    displayName: "Chevalier-Argent",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 0,
      technique: 0,
      vitesse: 0,
      chance: 0,
      defense: 5,
      resistance: 0,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 165,
      magie: 165,
      technique: 120,
      vitesse: 120,
      chance: 120,
      defense: 125,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 85,
      magie: 20,
      technique: 35,
      vitesse: 50,
      chance: 10,
      defense: 65,
      resistance: 35,
      charisme: 30
    },
    jobsSuivants: [],
    montee: true,
    volante: false,
    niveauMax: 60
  }

  private chevalierOr: Job = {
    rang: 3,
    name: "chevalierOr",
    displayName: "Chevalier-Or",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 5,
      magie: 0,
      technique: 5,
      vitesse: 0,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 225,
      magie: 220,
      technique: 165,
      vitesse: 160,
      chance: 160,
      defense: 165,
      resistance: 160,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 95,
      magie: 20,
      technique: 45,
      vitesse: 50,
      chance: 15,
      defense: 70,
      resistance: 40,
      charisme: 30
    },
    jobsSuivants: [],
    montee: true,
    volante: false,
    niveauMax: 20
  }

  private paladin: Job = {
    rang: 1,
    name: "paladin",
    displayName: "Paladin",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 0,
      technique: 0,
      vitesse: 5,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 110,
      magie: 110,
      technique: 80,
      vitesse: 85,
      chance: 80,
      defense: 80,
      resistance: 80,
      charisme: 80
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 80,
      magie: 20,
      technique: 30,
      vitesse: 65,
      chance: 10,
      defense: 55,
      resistance: 35,
      charisme: 35
    },
    jobsSuivants: [],
    montee: true,
    volante: false,
    niveauMax: 40
  }

  private chevalierSacre: Job = {
    rang: 2,
    name: "chevalierSacre",
    displayName: "Chevalier Sacré",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 12,
      force: 165,
      magie: 165,
      technique: 120,
      vitesse: 125,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 80,
      magie: 40,
      technique: 30,
      vitesse: 70,
      chance: 10,
      defense: 60,
      resistance: 40,
      charisme: 35
    },
    jobsSuivants: [],
    montee: true,
    volante: false,
    niveauMax: 60
  }

  private skogul: Job = {
    rang: 3,
    name: "skogul",
    displayName: "Skögul",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 5,
      technique: 5,
      vitesse: 0,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 220,
      magie: 225,
      technique: 165,
      vitesse: 165,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 160
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 80,
      magie: 60,
      technique: 45,
      vitesse: 55,
      chance: 15,
      defense: 50,
      resistance: 50,
      charisme: 40
    },
    jobsSuivants: [],
    montee: true,
    volante: false,
    niveauMax: 80
  }

  //#endregion

  //#region Archer

  private archer: Job = {
    rang: 0,
    name: "archer",
    displayName: "Archer",
    baseStats: {
      pointsVie: 18,
      mouvement: 4,
      force: 4,
      magie: 0,
      technique: 3,
      vitesse: 3,
      chance: 0,
      defense: 3,
      resistance: 0,
      charisme: 0
    },
    maxStats: {
      pointsVie: 60,
      mouvement: 10,
      force: 26,
      magie: 20,
      technique: 31,
      vitesse: 27,
      chance: 29,
      defense: 23,
      resistance: 21,
      charisme: 0
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 60,
      mouvement: 0,
      force: 50,
      magie: 25,
      technique: 50,
      vitesse: 50,
      chance: 45,
      defense: 30,
      resistance: 30,
      charisme: 50
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 20
  }

  private sniper: Job = {
    rang: 1,
    name: "sniper",
    displayName: "Sniper",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 0,
      force: 85,
      magie: 15,
      technique: 40,
      vitesse: 40,
      chance: 35,
      defense: 45,
      resistance: 45,
      charisme: 25
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 40
  }

  private rodeur: Job = {
    rang: 1,
    name: "rodeur",
    displayName: "Rôdeur",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 12,
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
      mouvement: 0,
      force: 80,
      magie: 15,
      technique: 40,
      vitesse: 50,
      chance: 35,
      defense: 45,
      resistance: 45,
      charisme: 25
    },
    jobsSuivants: [],
    montee: true,
    volante: false,
    niveauMax: 40
  }

  private balistaire: Job = {
    rang: 2,
    name: "balistaire",
    displayName: "Balistaire",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      force: 165,
      magie: 165,
      technique: 120,
      vitesse: 120,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 90,
      magie: 25,
      technique: 50,
      vitesse: 40,
      chance: 35,
      defense: 50,
      resistance: 50,
      charisme: 25
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 60
  }

  private ranger: Job = {
    rang: 2,
    name: "ranger",
    displayName: "Ranger",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 0,
      technique: 0,
      vitesse: 5,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 165,
      magie: 165,
      technique: 120,
      vitesse: 125,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 90,
      magie: 15,
      technique: 45,
      vitesse: 60,
      chance: 35,
      defense: 50,
      resistance: 50,
      charisme: 30
    },
    jobsSuivants: [],
    montee: true,
    volante: false,
    niveauMax: 60
  }

  private machiniste: Job = {
    rang: 3,
    name: "machiniste",
    displayName: "Machiniste",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 0,
      technique: 0,
      vitesse: 0,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 220,
      magie: 220,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 95,
      magie: 30,
      technique: 55,
      vitesse: 45,
      chance: 40,
      defense: 55,
      resistance: 55,
      charisme: 40
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 80
  }

  private chevalierArc: Job = {
    rang: 3,
    name: "chevalierArc",
    displayName: "Chevalier-Arc",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 5,
      magie: 0,
      technique: 0,
      vitesse: 0,
      chance: 0,
      defense: 5,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 225,
      magie: 220,
      technique: 160,
      vitesse: 165,
      chance: 160,
      defense: 165,
      resistance: 160,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 100,
      magie: 15,
      technique: 50,
      vitesse: 65,
      chance: 35,
      defense: 65,
      resistance: 55,
      charisme: 30
    },
    jobsSuivants: [],
    montee: true,
    volante: false,
    niveauMax: 60
  }

  private chevalierKinshi: Job = {
    rang: 3,
    name: "chevalierKinshi",
    displayName: "Chevalier Kinshi",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 5,
      magie: 0,
      technique: 5,
      vitesse: 0,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 225,
      magie: 220,
      technique: 165,
      vitesse: 165,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 100,
      magie: 20,
      technique: 60,
      vitesse: 65,
      chance: 35,
      defense: 55,
      resistance: 55,
      charisme: 45
    },
    jobsSuivants: [],
    montee: true,
    volante: true,
    niveauMax: 80
  }

  //#endregion

  //#region Mage

  private mageElementaire: Job = {
    rang: 0,
    name: "mageElementaire",
    displayName: "Mage Elémentaire",
    baseStats: {
      pointsVie: 16,
      mouvement: 4,
      force: 0,
      magie: 1,
      technique: 3,
      vitesse: 2,
      chance: 0,
      defense: 2,
      resistance: 4,
      charisme: 0
    },
    maxStats: {
      pointsVie: 60,
      mouvement: 10,
      force: 19,
      magie: 31,
      technique: 28,
      vitesse: 27,
      chance: 31,
      defense: 20,
      resistance: 25,
      charisme: 0
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 45,
      mouvement: 0,
      force: 25,
      magie: 65,
      technique: 30,
      vitesse: 45,
      chance: 45,
      defense: 15,
      resistance: 40,
      charisme: 50
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 20
  }

  private mageTenebres: Job = {
    rang: 0,
    name: "mageTenebres",
    displayName: "Mage Ténèbres",
    baseStats: {
      pointsVie: 16,
      mouvement: 4,
      force: 0,
      magie: 2,
      technique: 1,
      vitesse: 2,
      chance: 0,
      defense: 2,
      resistance: 4,
      charisme: 0
    },
    maxStats: {
      pointsVie: 60,
      mouvement: 10,
      force: 20,
      magie: 30,
      technique: 27,
      vitesse: 26,
      chance: 28,
      defense: 26,
      resistance: 27,
      charisme: 0
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 70,
      mouvement: 0,
      force: 25,
      magie: 50,
      technique: 40,
      vitesse: 35,
      chance: 20,
      defense: 45,
      resistance: 30,
      charisme: 50
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 20
  }

  private sage: Job = {
    rang: 1,
    name: "sage",
    displayName: "Sage",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 0,
      force: 10,
      magie: 90,
      technique: 20,
      vitesse: 25,
      chance: 30,
      defense: 40,
      resistance: 65,
      charisme: 65
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 40
  }

  private shaman: Job = {
    rang: 1,
    name: "shaman",
    displayName: "Shaman / Sorcière",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 0,
      force: 20,
      magie: 85,
      technique: 25,
      vitesse: 25,
      chance: 30,
      defense: 45,
      resistance: 65,
      charisme: 60
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 40
  }

  private druide: Job = {
    rang: 2,
    name: "druide",
    displayName: "Druide",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      force: 165,
      magie: 165,
      technique: 120,
      vitesse: 120,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 10,
      magie: 95,
      technique: 25,
      vitesse: 30,
      chance: 35,
      defense: 45,
      resistance: 65,
      charisme: 65
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 60
  }

  private gremory: Job = {
    rang: 2,
    name: "gremory",
    displayName: "Gremory",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      force: 165,
      magie: 165,
      technique: 120,
      vitesse: 120,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 35,
      magie: 85,
      technique: 25,
      vitesse: 25,
      chance: 30,
      defense: 45,
      resistance: 70,
      charisme: 60
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 60
  }

  private archimage: Job = {
    rang: 3,
    name: "archimage",
    displayName: "Archimage",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 5,
      technique: 0,
      vitesse: 5,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 220,
      magie: 225,
      technique: 160,
      vitesse: 165,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 10,
      magie: 100,
      technique: 30,
      vitesse: 30,
      chance: 35,
      defense: 50,
      resistance: 70,
      charisme: 70
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 80
  }

  private necromancien: Job = {
    rang: 3,
    name: "necromancien",
    displayName: "Nécromancien",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 5,
      technique: 0,
      vitesse: 0,
      chance: 0,
      defense: 0,
      resistance: 5,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 220,
      magie: 225,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 160,
      resistance: 165,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 40,
      magie: 95,
      technique: 30,
      vitesse: 25,
      chance: 30,
      defense: 50,
      resistance: 80,
      charisme: 70
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 80
  }

  //#endregion

  //#region Nobles

  private lord: Job = {
    rang: 0,
    name: "lord",
    displayName: "Lord / Lady",
    baseStats: {
      pointsVie: 16,
      mouvement: 4,
      force: 4,
      magie: 0,
      technique: 8,
      vitesse: 9,
      chance: 0,
      defense: 3,
      resistance: 1,
      charisme: 10
    },
    maxStats: {
      pointsVie: 60,
      mouvement: 10,
      force: 25,
      magie: 25,
      technique: 25,
      vitesse: 25,
      chance: 30,
      defense: 25,
      resistance: 25,
      charisme: 0
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 70,
      mouvement: 0,
      force: 55,
      magie: 30,
      technique: 60,
      vitesse: 60,
      chance: 60,
      defense: 30,
      resistance: 30,
      charisme: 50
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 20
  }

  private noble: Job = {
    rang: 1,
    name: "noble",
    displayName: "Noble",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 12,
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
      mouvement: 0,
      force: 70,
      magie: 40,
      technique: 35,
      vitesse: 35,
      chance: 30,
      defense: 50,
      resistance: 50,
      charisme: 60
    },
    jobsSuivants: [],
    montee: true,
    volante: false,
    niveauMax: 40
  }

  private heros: Job = {
    rang: 1,
    name: "heros",
    displayName: "Héros / Héroïne",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 0,
      force: 75,
      magie: 45,
      technique: 30,
      vitesse: 30,
      chance: 30,
      defense: 55,
      resistance: 55,
      charisme: 60
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 40
  }

  private nobleMage: Job = {
    rang: 2,
    name: "nobleMage",
    displayName: "Noble-Mage",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      mouvement: 12,
      force: 165,
      magie: 165,
      technique: 120,
      vitesse: 120,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 75,
      magie: 60,
      technique: 45,
      vitesse: 45,
      chance: 30,
      defense: 55,
      resistance: 55,
      charisme: 60
    },
    jobsSuivants: [],
    montee: true,
    volante: false,
    niveauMax: 60
  }

  private herosMage: Job = {
    rang: 2,
    name: "herosMage",
    displayName: "Héros-Mage",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
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
      force: 165,
      magie: 165,
      technique: 120,
      vitesse: 120,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 75,
      magie: 60,
      technique: 40,
      vitesse: 40,
      chance: 30,
      defense: 65,
      resistance: 65,
      charisme: 60
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 60
  }

  private grandLord: Job = {
    rang: 3,
    name: "grandLord",
    displayName: "Grand Lord",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 0,
      technique: 5,
      vitesse: 5,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 220,
      magie: 220,
      technique: 165,
      vitesse: 165,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 160
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 80,
      magie: 65,
      technique: 55,
      vitesse: 55,
      chance: 35,
      defense: 60,
      resistance: 60,
      charisme: 60
    },
    jobsSuivants: [],
    montee: true,
    volante: false,
    niveauMax: 80
  }

  private conquerant: Job = {
    rang: 3,
    name: "conquerant",
    displayName: "Conquérant / Régente",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 0,
      technique: 0,
      vitesse: 0,
      chance: 0,
      defense: 5,
      resistance: 5,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 220,
      magie: 220,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 165,
      resistance: 165,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 80,
      magie: 65,
      technique: 45,
      vitesse: 45,
      chance: 30,
      defense: 80,
      resistance: 80,
      charisme: 60
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 80
  }

  //#endregion

  //#region Epeiste

  private epeiste: Job = {
    rang: 0,
    displayName: "Epéiste",
    name: "epeiste",
    baseStats: {
      pointsVie: 18,
      mouvement: 4,
      force: 4,
      magie: 0,
      technique: 8,
      vitesse: 8,
      chance: 0,
      defense: 4,
      resistance: 0,
      charisme: 0
    },
    maxStats: {
      pointsVie: 60,
      mouvement: 10,
      force: 24,
      magie: 22,
      technique: 30,
      vitesse: 31,
      chance: 30,
      defense: 20,
      resistance: 22,
      charisme: 0
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 80,
      mouvement: 0,
      force: 50,
      magie: 25,
      technique: 55,
      vitesse: 55,
      chance: 30,
      defense: 20,
      resistance: 20,
      charisme: 50
    },
    montee: false,
    volante: false,
    niveauMax: 20,
    jobsSuivants: []
  }

  private myrmidon: Job = {
    rang: 1,
    displayName: "Myrmidon",
    name: "myrmidon",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 0,
      technique: 0,
      vitesse: 5,
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
      vitesse: 85,
      chance: 80,
      defense: 80,
      resistance: 80,
      charisme: 80
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 90,
      magie: 20,
      technique: 35,
      vitesse: 45,
      chance: 20,
      defense: 70,
      resistance: 55,
      charisme: 30
    },
    montee: false,
    volante: false,
    niveauMax: 40,
    jobsSuivants: []
  }

  private mercenaire: Job = {
    rang: 1,
    displayName: "Mercenaire",
    name: "mercenaire",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 5,
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
      force: 115,
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
      mouvement: 0,
      force: 90,
      magie: 25,
      technique: 45,
      vitesse: 50,
      chance: 20,
      defense: 55,
      resistance: 50,
      charisme: 30
    },
    montee: false,
    volante: false,
    niveauMax: 40,
    jobsSuivants: []
  }

  private bretteur: Job = {
    rang: 2,
    displayName: "Bretteur",
    name: "bretteur",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 0,
      technique: 5,
      vitesse: 0,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 165,
      magie: 165,
      technique: 125,
      vitesse: 120,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 95,
      magie: 20,
      technique: 50,
      vitesse: 50,
      chance: 20,
      defense: 85,
      resistance: 65,
      charisme: 30
    },
    montee: false,
    volante: false,
    niveauMax: 60,
    jobsSuivants: []
  }

  private terreur: Job = {
    rang: 2,
    displayName: "Terreur",
    name: "terreur",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 0,
      magie: 0,
      technique: 5,
      vitesse: 0,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 170,
      magie: 165,
      technique: 125,
      vitesse: 120,
      chance: 120,
      defense: 120,
      resistance: 120,
      charisme: 120
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 90,
      magie: 45,
      technique: 50,
      vitesse: 55,
      chance: 20,
      defense: 50,
      resistance: 50,
      charisme: 35
    },
    montee: false,
    volante: false,
    niveauMax: 60,
    jobsSuivants: []
  }

  private asura: Job = {
    displayName: "Asura",
    name: "asura",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 5,
      magie: 0,
      technique: 0,
      vitesse: 0,
      chance: 0,
      defense: 5,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 225,
      magie: 220,
      technique: 165,
      vitesse: 165,
      chance: 160,
      defense: 165,
      resistance: 160,
      charisme: 130
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 100,
      magie: 30,
      technique: 55,
      vitesse: 55,
      chance: 25,
      defense: 85,
      resistance: 70,
      charisme: 35
    },
    montee: false,
    volante: false,
    rang: 3,
    niveauMax: 80,
    jobsSuivants: []
  }

  private yakasha: Job = {
    rang: 3,
    displayName: "Yakasha",
    name: "yakasha",
    baseStats: {
      pointsVie: 0,
      mouvement: 2,
      force: 5,
      magie: 0,
      technique: 0,
      vitesse: 5,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 10
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 230,
      magie: 225,
      technique: 165,
      vitesse: 160,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 170
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 100,
      mouvement: 0,
      force: 95,
      magie: 55,
      technique: 50,
      vitesse: 55,
      chance: 20,
      defense: 50,
      resistance: 50,
      charisme: 35
    },
    montee: false,
    volante: false,
    niveauMax: 80,
    jobsSuivants: []
  }

  //#endregion

  //#region Laguz

  private chat: Job = {
    rang: 0,
    name: "chat",
    displayName: "Chat",
    baseStats: {
      pointsVie: 22,
      mouvement: 6,
      force: 2,
      magie: 1,
      technique: 3,
      vitesse: 8,
      chance: 0,
      defense: 3,
      resistance: 1,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 220,
      magie: 220,
      technique: 160,
      vitesse: 165,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 160
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 70,
      mouvement: 10,
      force: 60,
      magie: 30,
      technique: 35,
      vitesse: 35,
      chance: 40,
      defense: 40,
      resistance: 40,
      charisme: 30
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 80
  }

  private tigre: Job = {
    rang: 0,
    name: "tigre",
    displayName: "Tigre",
    baseStats: {
      pointsVie: 22,
      mouvement: 6,
      force: 2,
      magie: 1,
      technique: 3,
      vitesse: 3,
      chance: 0,
      defense: 8,
      resistance: 1,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 220,
      magie: 220,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 165,
      resistance: 160,
      charisme: 160
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 70,
      mouvement: 10,
      force: 60,
      magie: 30,
      technique: 35,
      vitesse: 35,
      chance: 40,
      defense: 40,
      resistance: 40,
      charisme: 30
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 80
  }

  private lion: Job = {
    rang: 0,
    name: "lion",
    displayName: "Lion",
    baseStats: {
      pointsVie: 22,
      mouvement: 6,
      force: 7,
      magie: 1,
      technique: 3,
      vitesse: 3,
      chance: 0,
      defense: 3,
      resistance: 1,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 225,
      magie: 220,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 165,
      resistance: 160,
      charisme: 160
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 70,
      mouvement: 10,
      force: 60,
      magie: 30,
      technique: 35,
      vitesse: 35,
      chance: 40,
      defense: 40,
      resistance: 40,
      charisme: 30
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 80
  }

  private corbeau: Job = {
    rang: 0,
    name: "corbeau",
    displayName: "Corbeau",
    baseStats: {
      pointsVie: 22,
      mouvement: 6,
      force: 2,
      magie: 1,
      technique: 3,
      vitesse: 8,
      chance: 0,
      defense: 3,
      resistance: 1,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 220,
      magie: 220,
      technique: 160,
      vitesse: 165,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 160
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 70,
      mouvement: 10,
      force: 60,
      magie: 30,
      technique: 35,
      vitesse: 35,
      chance: 40,
      defense: 40,
      resistance: 40,
      charisme: 30
    },
    jobsSuivants: [],
    montee: false,
    volante: true,
    niveauMax: 80
  }

  private faucon: Job = {
    rang: 0,
    name: "faucon",
    displayName: "Faucon",
    baseStats: {
      pointsVie: 22,
      mouvement: 6,
      force: 7,
      magie: 1,
      technique: 3,
      vitesse: 3,
      chance: 0,
      defense: 3,
      resistance: 1,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 225,
      magie: 220,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 165,
      resistance: 160,
      charisme: 160
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 70,
      mouvement: 10,
      force: 60,
      magie: 30,
      technique: 35,
      vitesse: 35,
      chance: 40,
      defense: 40,
      resistance: 40,
      charisme: 30
    },
    jobsSuivants: [],
    montee: false,
    volante: true,
    niveauMax: 80
  }

  private heron: Job = {
    rang: 0,
    name: "heron",
    displayName: "Héron",
    baseStats: {
      pointsVie: 22,
      mouvement: 6,
      force: 2,
      magie: 1,
      technique: 3,
      vitesse: 3,
      chance: 0,
      defense: 3,
      resistance: 6,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 220,
      magie: 220,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 160,
      resistance: 165,
      charisme: 160
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 70,
      mouvement: 10,
      force: 60,
      magie: 30,
      technique: 35,
      vitesse: 35,
      chance: 40,
      defense: 40,
      resistance: 40,
      charisme: 30
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 80
  }

  private dragonRouge: Job = {
    rang: 0,
    name: "dragonRouge",
    displayName: "Dragon Rouge",
    baseStats: {
      pointsVie: 22,
      mouvement: 6,
      force: 2,
      magie: 1,
      technique: 3,
      vitesse: 3,
      chance: 0,
      defense: 8,
      resistance: 1,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 220,
      magie: 220,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 165,
      resistance: 160,
      charisme: 160
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 70,
      mouvement: 10,
      force: 60,
      magie: 30,
      technique: 35,
      vitesse: 35,
      chance: 40,
      defense: 40,
      resistance: 40,
      charisme: 30
    },
    jobsSuivants: [],
    montee: false,
    volante: true,
    niveauMax: 80
  }

  private dragonNoir: Job = {
    rang: 0,
    name: "dragonNoir",
    displayName: "dragonNoir",
    baseStats: {
      pointsVie: 22,
      mouvement: 6,
      force: 7,
      magie: 1,
      technique: 3,
      vitesse: 3,
      chance: 0,
      defense: 3,
      resistance: 1,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 225,
      magie: 220,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 165,
      resistance: 160,
      charisme: 160
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 70,
      mouvement: 10,
      force: 60,
      magie: 30,
      technique: 35,
      vitesse: 35,
      chance: 40,
      defense: 40,
      resistance: 40,
      charisme: 30
    },
    jobsSuivants: [],
    montee: false,
    volante: true,
    niveauMax: 80
  }

  private dragonBlanc: Job = {
    rang: 0,
    name: "dragonBlanc",
    displayName: "Dragon Blanc",
    baseStats: {
      pointsVie: 22,
      mouvement: 6,
      force: 2,
      magie: 1,
      technique: 3,
      vitesse: 3,
      chance: 0,
      defense: 3,
      resistance: 6,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 220,
      magie: 220,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 160,
      resistance: 165,
      charisme: 160
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 70,
      mouvement: 10,
      force: 60,
      magie: 30,
      technique: 35,
      vitesse: 35,
      chance: 40,
      defense: 40,
      resistance: 40,
      charisme: 30
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 80
  }

  private loup: Job = {
    rang: 0,
    name: "loup",
    displayName: "Loup",
    baseStats: {
      pointsVie: 22,
      mouvement: 6,
      force: 2,
      magie: 1,
      technique: 3,
      vitesse: 8,
      chance: 0,
      defense: 3,
      resistance: 1,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 220,
      magie: 220,
      technique: 160,
      vitesse: 165,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 160
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 70,
      mouvement: 10,
      force: 60,
      magie: 30,
      technique: 35,
      vitesse: 35,
      chance: 40,
      defense: 40,
      resistance: 40,
      charisme: 30
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 80
  }

  private ulfhedin: Job = {
    rang: 0,
    name: "ulfhedin",
    displayName: "Ulfhedin",
    baseStats: {
      pointsVie: 22,
      mouvement: 6,
      force: 7,
      magie: 1,
      technique: 3,
      vitesse: 3,
      chance: 0,
      defense: 3,
      resistance: 1,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 225,
      magie: 220,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 165,
      resistance: 160,
      charisme: 160
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 70,
      mouvement: 10,
      force: 60,
      magie: 30,
      technique: 35,
      vitesse: 35,
      chance: 40,
      defense: 40,
      resistance: 40,
      charisme: 30
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 80
  }

  private kitsune: Job = {
    rang: 0,
    name: "kitsune",
    displayName: "Kitsune",
    baseStats: {
      pointsVie: 22,
      mouvement: 6,
      force: 2,
      magie: 1,
      technique: 3,
      vitesse: 8,
      chance: 0,
      defense: 3,
      resistance: 1,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 220,
      magie: 220,
      technique: 160,
      vitesse: 165,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 160
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 70,
      mouvement: 10,
      force: 60,
      magie: 30,
      technique: 35,
      vitesse: 35,
      chance: 40,
      defense: 40,
      resistance: 40,
      charisme: 30
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 80
  }

  private taguel: Job = {
    rang: 0,
    name: "taguel",
    displayName: "Tagüel",
    baseStats: {
      pointsVie: 22,
      mouvement: 6,
      force: 2,
      magie: 1,
      technique: 3,
      vitesse: 8,
      chance: 0,
      defense: 3,
      resistance: 1,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 12,
      force: 220,
      magie: 220,
      technique: 160,
      vitesse: 165,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 160
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 70,
      mouvement: 10,
      force: 60,
      magie: 30,
      technique: 35,
      vitesse: 35,
      chance: 40,
      defense: 40,
      resistance: 40,
      charisme: 30
    },
    jobsSuivants: [],
    montee: false,
    volante: false,
    niveauMax: 80
  }

  //#endregion

  //#region Barde

  private barde: Job = {
    rang: 0,
    displayName: "Barde / Chanteur(euse) / Danseur(euse)",
    name: "barde",
    baseStats: {
      pointsVie: 14,
      mouvement: 4,
      force: 1,
      magie: 0,
      technique: 2,
      vitesse: 7,
      chance: 0,
      defense: 0,
      resistance: 0,
      charisme: 0
    },
    maxStats: {
      pointsVie: 0,
      mouvement: 10,
      force: 220,
      magie: 220,
      technique: 160,
      vitesse: 160,
      chance: 160,
      defense: 160,
      resistance: 160,
      charisme: 160
    },
    pourcentageIncrementGainNiveau: {
      pointsVie: 75,
      mouvement: 10,
      force: 50,
      magie: 30,
      technique: 70,
      vitesse: 70,
      chance: 60,
      defense: 25,
      resistance: 25,
      charisme: 50
    },
    montee: false,
    volante: false,
    niveauMax: 80,
    jobsSuivants: []
  }


  //#endregion
  private base: Job = {
    rang: -1,
    displayName: "Aucun Job",
    name: "base",
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
    montee: false,
    volante: false,
    niveauMax: 0,
    jobsSuivants: []
  }


  //#endregion

}