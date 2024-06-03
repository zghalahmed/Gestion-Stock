import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticlesService } from 'src/services/articles.service';



@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  articles: any[] = [];

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.getArticles(); // Appeler la méthode pour récupérer les articles lors de l'initialisation du composant
  }

  getArticles(): void {
    this.articleService.getArticles().subscribe({
      next: (articles: any) => {
        this.articles = articles;
      },
      error: (error: any) => { // Spécifiez explicitement le type de 'error' comme 'any'
        console.error('Erreur lors de la récupération des articles : ', error);
      }
    });
  }
delete(articleId: string): void {
    this.articleService.deleteArticle(articleId).subscribe({
      next: (data) => {
        console.log('L\'article a été supprimé avec succès : ', data);
        // Mettre à jour la liste des articles après la suppression
        this.getArticles();
      },
      error: (error) => {
        console.error('Une erreur s\'est produite lors de la suppression de l\'article : ', error);
      }
    });
  }
  
 
}
