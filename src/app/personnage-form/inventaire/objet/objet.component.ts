import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Objet } from '../../../data/objets/objet';

@Component({
  selector: 'app-objet',
  standalone: true,
  imports: [],
  templateUrl: './objet.component.html',
  styleUrl: './objet.component.scss'
})
export class ObjetComponent {
  @Input() objet?:Objet;
  @Output() objetChange:EventEmitter<Objet> = new EventEmitter<Objet>();
}
