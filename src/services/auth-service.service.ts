import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_API = 'http://localhost:3000';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  register(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.AUTH_API}/login`, credentials); // Correction ici
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.AUTH_API}/login`, credentials).pipe(
      tap(() => this.isAuthenticatedSubject.next(true))
    );
  }

  logout(): void {
    // Supprimer le token d'authentification du stockage local ou du cookie
    this.isAuthenticatedSubject.next(false);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
}
