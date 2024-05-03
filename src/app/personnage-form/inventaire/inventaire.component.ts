import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Inventaire } from '../../data/personnage/inventaire';
import { ObjetComponent } from './objet/objet.component';

@Component({
  selector: 'app-inventaire',
  standalone: true,
  imports: [ObjetComponent],
  templateUrl: './inventaire.component.html',
  styleUrl: './inventaire.component.scss'
})
export class InventaireComponent {
  @Input() inventaire:Inventaire = {divers:[]};

  @Output() inventaireChange:EventEmitter<Inventaire> = new EventEmitter<Inventaire>();
}
