// Louvado seja o Senhor

import { Component, signal } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'sprAng-header',
  imports: [MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuAberto = signal(false);

  openMenu(){
    this.menuAberto.set(true);
  }
}
