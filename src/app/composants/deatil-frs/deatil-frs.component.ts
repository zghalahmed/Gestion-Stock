import { Component } from '@angular/core';
import { FournisseurrService } from 'src/services/fournisseurr.service';


@Component({
  selector: 'app-deatil-frs',
  templateUrl: './deatil-frs.component.html',
  styleUrls: ['./deatil-frs.component.css']
})
export class DeatilFrsComponent {
  fournisseurs: any[] = [];
  constructor(private fournisseurService: FournisseurrService) { }


  ngOnInit(): void {
    this.getFournisseurs(); // Appeler la méthode pour récupérer les articles lors de l'initialisation du composant
  }

  getFournisseurs(): void {
    this.fournisseurService.getFournisseurs().subscribe({
      next: (fournisseurs: any) => {
        this.fournisseurs = fournisseurs;
      },
      error: (error: any) => { // Spécifiez explicitement le type de 'error' comme 'any'
        console.error('Erreur lors de la récupération des articles : ', error);
      }
    });
  }
  delete(fournisseurId: string): void {
    this.fournisseurService.deleteFournisseur(fournisseurId).subscribe({
      next: (data) => {
        console.log('L\'article a été supprimé avec succès : ', data);
        // Mettre à jour la liste des articles après la suppression
        this.getFournisseurs();
      },
      error: (error) => {
        console.error('Une erreur s\'est produite lors de la suppression de client : ', error);
      }
    });
  }
 
}



