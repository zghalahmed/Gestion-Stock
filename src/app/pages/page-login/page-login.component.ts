import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService,  } from 'src/services/auth-service.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      (data) => {
        // Vous pouvez utiliser 'data' ici si nécessaire
        console.log('Authentification réussie', data);
        // Rediriger l'utilisateur vers une autre page après l'authentification réussie
        this.router.navigate(['/articles']);
      },
      (error) => {
        // Afficher un message d'erreur à l'utilisateur
        console.error('Erreur lors de l\'authentification :', error);
      }
    );
  }
  
}
