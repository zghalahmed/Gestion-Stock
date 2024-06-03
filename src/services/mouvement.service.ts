import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/interfaces/article';
import { Clients } from 'src/interfaces/client';
import { Transaction } from 'src/interfaces/transaction';

@Injectable({
  providedIn: 'root'
})
export class MouvementService {
  private baseUrl = 'http://localhost:3000'; // Base URL de votre API

  constructor(private http: HttpClient) { }

  // Méthode pour enregistrer une transaction
  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.baseUrl}/transactions`, transaction);
  }

  // Méthodes pour récupérer la liste des clients, des articles, des transporteurs, etc.
  getClients(): Observable<Clients[]> {
    return this.http.get<Clients[]>(`${this.baseUrl}/clients`);
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseUrl}/articles`);
  }

  
  // Méthode pour mettre à jour la quantité d'articles vendus
  updateArticleQuantity(articleId: string, soldQuantity: number): Observable<Article> {
    return this.http.patch<Article>(`${this.baseUrl}/articles/${articleId}`, { quantite: soldQuantity });
  }
  getArticleById(articleId: string): Observable<Article> {
    return this.http.get<Article>(`${this.baseUrl}/articles/${articleId}`);
  }
  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/transactions`);
  }

  updateTransaction(transactionId: string, updatedTransaction: Transaction): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/transactions/${transactionId}`, updatedTransaction);
  }

  deleteTransaction(transactionId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/transactions/${transactionId}`);
  }
}

 
