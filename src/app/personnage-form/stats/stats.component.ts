import { Component, Input, OnInit } from '@angular/core';
import { Stats } from '../../data/personnage/stats';
import { StatSimpleComponent } from './stat-simple/stat-simple.component';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [StatSimpleComponent],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent implements OnInit {
  ngOnInit(): void {
    // rien
  }
  @Input() permanentStats:Stats|null = null;
  @Input() permanentBoosts:Stats|null = null;
  @Input() itemBonus:Stats|undefined;

}
