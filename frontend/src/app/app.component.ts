// Louvado seja o Senhor

import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SprintAngular';
  user = sessionStorage.getItem('user');
  private readonly router = inject(Router);

  ngOnInit() : void{
    this.checkLogin();
  }

  checkLogin(){
    if(!this.user){
      this.router.navigate(['/login']);
    }
  }
}
