import { Component } from '@angular/core';
import { Article } from 'src/interfaces/article';
import { Clients } from 'src/interfaces/client';
import { Transaction } from 'src/interfaces/transaction';
import { MouvementService } from 'src/services/mouvement.service';

@Component({
  selector: 'app-mvtstk',
  templateUrl: './mvtstk.component.html',
  styleUrls: ['./mvtstk.component.css']
})
export class MvtstkComponent {
  Transactions: Transaction[] = [];
  Articles: Article[] = [];
  Clients: Clients[] = [];

  constructor(private MS: MouvementService) { }

  ngOnInit(): void {
    this.getTransactions(); // Call the method to retrieve transactions during component initialization
    this.getArticles();
    this.getClients();
  }

  getTransactions(): void {
    this.MS.getTransactions().subscribe({
      next: (Transactions: Transaction[]) => {
        this.Transactions = Transactions;
      },
      error: (error: any) => {
        console.error('Erreur lors de la récupération des articles : ', error);
      }
    });
  }

  getArticles(): void {
    this.MS.getArticles().subscribe({
      next: (Articles: Article[]) => {
        this.Articles = Articles;
      },
      error: (error: any) => {
        console.error('Erreur lors de la récupération des articles : ', error);
      }
    });
  }

  getClients(): void {
    this.MS.getClients().subscribe({
      next: (Clients: Clients[]) => {
        this.Clients = Clients;
      },
      error: (error: any) => {
        console.error('Erreur lors de la récupération des clients : ', error);
      }
    });
  }

  getArticleName(articleId: string): string {
    const article = this.Articles.find(a => a.id === articleId);
    return article ? article.designation : 'Unknown';
  }

  getClientName(clientid: string): string {
    const client = this.Clients.find(c => c.id === clientid);
    return client ? client.Nom : 'Unknown';
  }
  deleteTransaction(transactionId: string): void {
    console.log(`Deleting transaction with ID: ${transactionId}`);


    this.MS.deleteTransaction(transactionId).subscribe({
      next: () => {
        this.Transactions = this.Transactions.filter(transaction => transaction.articleId !== transactionId);
      },
      error: (error: any) => {
        console.error('Erreur lors de la suppression de la transaction : ', error);
      }
    });
  }

}
