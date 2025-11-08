// Louvado seja o Senhor

import { afterRender, Component, ElementRef, model, viewChild } from '@angular/core';

@Component({
  selector: 'sprAng-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menu = viewChild.required<ElementRef<HTMLDialogElement>>('menu');
  isOpen = model(false);

  closeMenu(){
    this.isOpen.set(false);
  }

  constructor(){
    afterRender(() => {
      if(this.isOpen()){
        this.menu().nativeElement.showModal();
      }
      else{
        this.menu().nativeElement.close();
      }
    });
  }
}
