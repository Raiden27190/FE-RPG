import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Objet } from '../../../data/objets/objet';
import { CommonModule } from '@angular/common';
import { Arme } from '../../../data/objets/arme';
import { Defensif } from '../../../data/objets/defensif';
import { TypeDegats } from '../../../data/objets/degats/typeDegats';
import { TypeObjet } from '../../../data/objets/typeObjet';

@Component({
  selector: 'app-objet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './objet.component.html',
  styleUrl: './objet.component.scss'
})
export class ObjetComponent {
  @Input() objet?: Objet;
  @Output() objetChange: EventEmitter<Objet> = new EventEmitter<Objet>();

  isArme(): boolean {
    return !!this.objet && "degatsPrincipaux" in this.objet;
  }

  isDefensif(): boolean {
    return !!this.objet && "bonusStats" in this.objet;
  }

  get arme():Arme{
    let thisArme = this.objet as Arme
    return thisArme;
  }
  defensif?: Defensif = this.objet as Defensif;

  assetTypeSrc(type: TypeDegats | TypeObjet | undefined): string {
    if (!!type)
      return "assets/" + type.toString() + ".png"
    else
      return "";
  }
}
