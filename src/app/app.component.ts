import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonnageFormComponent } from './personnage-form/personnage-form.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonnageFormComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FE-RPG';
}
