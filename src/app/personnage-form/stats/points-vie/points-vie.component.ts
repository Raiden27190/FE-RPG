import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-points-vie',
  standalone: true,
  imports: [],
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

}
