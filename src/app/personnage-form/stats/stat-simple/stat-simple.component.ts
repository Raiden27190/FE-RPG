import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stat-simple',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './stat-simple.component.html',
  styleUrl: './stat-simple.component.scss'
})
export class StatSimpleComponent {
  @Input() statName:string|null = null;
  @Input() mainStat:number|null |undefined= null;
  @Input() permanentBonus:number|null|undefined = null;
  @Input() itemStatBonus:number|null|undefined = null;
}
