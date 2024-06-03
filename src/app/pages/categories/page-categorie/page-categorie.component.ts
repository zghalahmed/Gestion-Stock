import { Component } from '@angular/core';
import { CategorieService } from 'src/services/categorie.service';

@Component({
  selector: 'app-page-categorie',
  templateUrl: './page-categorie.component.html',
  styleUrls: ['./page-categorie.component.css']
})
export class PageCategorieComponent {
  categories: any[] = [];

  constructor(private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.getCategories(); // Appeler la méthode pour récupérer les articles lors de l'initialisation du composant
  }

  getCategories(): void {
    this.categorieService.getCategories().subscribe({
      next: (categories: any) => {
        this.categories = categories;
      },
      error: (error: any) => { // Spécifiez explicitement le type de 'error' comme 'any'
        console.error('Erreur lors de la récupération des categories : ', error);
      }
    });
  }
delete(categorieId: string): void {
    this.categorieService.deleteCategorie(categorieId).subscribe({
      next: (data) => {
        console.log('categorie a été supprimé avec succès : ', data);
        // Mettre à jour la liste des articles après la suppression
        this.getCategories();
      },
      error: (error) => {
        console.error('Une erreur s\'est produite lors de la suppression de categorie : ', error);
      }
    });
  }
  
 
}
