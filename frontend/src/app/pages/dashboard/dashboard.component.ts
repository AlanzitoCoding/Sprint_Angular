// Louvado seja o Senhor

import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { CarDataCardComponent } from "./car-data-card/car-data-card.component";

@Component({
  selector: 'sprAng-dashboard',
  imports: [HeaderComponent, CarDataCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
