import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth-service.service';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.css']
})
export class PageInscriptionComponent {
  email: string = '';
  password: string = '';
  confirmationPassword: string = '';

  constructor(private authService: AuthService) {}

  register(): void {
    // Vérifier si le mot de passe et la confirmation du mot de passe sont identiques
    if (this.password !== this.confirmationPassword) {
      // Afficher un message d'erreur à l'utilisateur si les mots de passe ne correspondent pas
      console.error("Les mots de passe ne correspondent pas");
      return;
    }

    const newUser = {
      email: this.email,
      password: this.password
    };

    this.authService.register(newUser).subscribe(
      () => {
        // Rediriger vers la page de connexion après l'inscription réussie
        console.log("Inscription réussie, redirection vers la page de connexion...");
        // Vous pouvez utiliser ici une méthode pour rediriger, par exemple :
        // this.router.navigate(['/login']);
      },
      error => {
        // Afficher un message d'erreur à l'utilisateur en cas d'échec de l'inscription
        console.error("Erreur lors de l'inscription:", error);
        // Vous pouvez également afficher un message d'erreur à l'utilisateur à l'aide d'une boîte de dialogue ou d'une alerte
      }
    );
  }
}
