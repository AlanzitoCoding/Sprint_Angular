// Louvado seja o Senhor

import { Component, inject, signal } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'sprAng-header',
  imports: [MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private readonly router = inject(Router);
  menuAberto = signal(false);

  openMenu(){
    this.menuAberto.set(true);
  }

  logout(){
    this.router.navigate(['/login']);
    sessionStorage.removeItem("user")
  }
}
