// Louvado seja o Senhor

import { Component, afterRender } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'sprAng-home',
  imports: [HeaderComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user = sessionStorage.getItem('user');

  constructor(){
    afterRender(() => {
      console.log(`Usuário Loggado (registro na Home): ${this.user}`);
    })
  }
}
