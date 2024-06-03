import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/interfaces/article';
import { Clients } from 'src/interfaces/client';
import { Transaction } from 'src/interfaces/transaction';
import { MouvementService } from 'src/services/mouvement.service';

@Component({
  selector: 'app-mouvementstock',
  templateUrl: './mouvementstock.component.html',
  styleUrls: ['./mouvementstock.component.css']
})
export class MouvementstockComponent {
  transactionForm !: FormGroup;
  clients: Clients[] = [];
  articles: Article[] = [];
  

  constructor(private formBuilder: FormBuilder, private eventService: MouvementService,private router:Router) { }

  ngOnInit(): void {
    this.transactionForm = this.formBuilder.group({
      clientId: ['', Validators.required],
      articleId: ['', Validators.required],
      quantite: ['', [Validators.required, Validators.min(1)]],
    });

    this.loadClients();
    this.loadArticles();
  }

  loadClients() {
    this.eventService.getClients().subscribe((clients) => {
      this.clients = clients;
    });
  }

  loadArticles() {
    this.eventService.getArticles().subscribe((articles) => {
      this.articles = articles;
    });
  }

  

  onSubmit() {
    if (this.transactionForm.valid) {
      const transaction: Transaction = this.transactionForm.value;
      this.eventService.addTransaction(transaction).subscribe(() => {
        // Mise à jour de la quantité d'articles vendus
        const articleId = transaction.articleId;
        const soldQuantity = transaction.quantite;
        console.log(articleId)

        this.eventService.getArticleById(articleId).subscribe((article) => {
          const updatedQuantity = article.quantite - soldQuantity;
          this.eventService.updateArticleQuantity(articleId, updatedQuantity).subscribe(() => {
            console.log(articleId)
          });
        });
        this.router.navigate(['/mvtstk'])
      }, (error) => {
        console.error('Erreur lors de l\'enregistrement de la transaction :', error);
      });
    }
  }}



