import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FournisseurrService {

  constructor(private httpClient:HttpClient) { }

  
  OnSave(memberToSave:any):Observable<any> // ay fonction fel service rahou angular ykharaj thread
  {
    // generateur de requete http
    const fournisseur1={
      ...memberToSave,// extraction de tout les attributs
       id: Math.ceil(Math.random()*1000).toString(), //pour generer un identifiant unique 
       createdDate: new Date().toISOString(),situation:"En attente", //date d'enregistrement
    }
  //return this.httpClient.post('http://localhost:8000/api/annonces',Member1);
  return this.httpClient.post('http://localhost:3000/Fournisseurs',fournisseur1)
   
  }
  getFournisseurs(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/Fournisseurs');
  }
  updateFournisseurs(currentItemId: string, fournisseurNew: any): Observable<any> {
    const currentDate = new Date();
    const day = ('0' + currentDate.getDate()).slice(-2); // Ajoute un zéro devant si nécessaire
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Ajoute un zéro devant si nécessaire
    const year = currentDate.getFullYear();
  
    const formattedDate = `${day}/${month}/${year}`;

    // Supposons que vous devez envoyer une requête PUT à l'API avec les données mises à jour
    const updatedFournisseur = { id: currentItemId, ...fournisseurNew, createdDate: formattedDate };

    // Remplacez l'URL de l'API par votre URL effective
    const url = `http://localhost:3000/Fournisseurs/${currentItemId}`; // Utilisez l'ID pour construire l'URL de la ressource à mettre à jour
    
    return this.httpClient.put(url, updatedFournisseur);
  }
  getFournisseurById(id: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:3000/Fournisseurs/${id}`);
  }
  deleteFournisseur(Id: string): Observable<any> {
    const url = `http://localhost:3000/Fournisseurs/${Id}`; // Utilisation de l'ID de l'article dans l'URL
    return this.httpClient.delete(url);
  }
  
  
}


