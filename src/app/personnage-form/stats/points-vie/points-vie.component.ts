import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-points-vie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './points-vie.component.html',
  styleUrl: './points-vie.component.scss'
})
export class PointsVieComponent {
  @Input() pvActuels:number = 0;
  @Input() pvMaxStat:number = 0;
  @Input() pvMaxBonus:number = 0;
  get pvMaxTotal():number{
    return this.pvMaxStat + this.pvMaxBonus
  }

  @Output() pvActuelsChange = new EventEmitter<number>();
}
