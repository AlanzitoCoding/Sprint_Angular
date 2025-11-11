// Louvado seja o Senhor

import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { RoundSwitchButtonComponent } from './round-switch-button/round-switch-button.component';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sprAng-login',
  imports: [RoundSwitchButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly apiService = inject(ApiService);
  private readonly router = inject(Router);

  usernameInput = viewChild.required<ElementRef<HTMLInputElement>>("usernameInput");
  passwordInput = viewChild.required<ElementRef<HTMLInputElement>>("passwordInput");
  passwordIcon = viewChild.required<ElementRef<HTMLElement>>("passwordIcon");

  changePasswordVisibility(){
    if(this.passwordInput().nativeElement.type.match("password")){
      this.passwordInput().nativeElement.type = "text";
      this.passwordIcon().nativeElement.classList.replace("ph-eye", "ph-eye-slash");
    }
    else if(this.passwordInput().nativeElement.type.match("text")){
      this.passwordInput().nativeElement.type = "password";
      this.passwordIcon().nativeElement.classList.replace("ph-eye-slash", "ph-eye");
    }
  }

  login(event : Event){
    event.preventDefault()
    const email : string = this.usernameInput().nativeElement.value;
    const password : string = this.passwordInput().nativeElement.value;
    
    this.apiService.login(email, password).subscribe({
      next: (res) => {
        sessionStorage.setItem('user', JSON.stringify(res));
        let user = sessionStorage.getItem('user');
        this.router.navigate(['/home']).then(success => console.log(`Usuário loggado: ${user}, \n${success}`));
      },
      error: (err) => {
        console.error('Erro no login', err);
        alert(err.error?.message || 'Falha no login');
      }
    });
  }
}
