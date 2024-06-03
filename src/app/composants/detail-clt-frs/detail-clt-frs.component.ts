import { Component } from '@angular/core';
import { ClientService } from 'src/services/client.service';

@Component({
  selector: 'app-detail-clt-frs',
  templateUrl: './detail-clt-frs.component.html',
  styleUrls: ['./detail-clt-frs.component.css']
})
export class DetailCltFrsComponent {
  clients: any[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients(); // Appeler la méthode pour récupérer les articles lors de l'initialisation du composant
  }

  getClients(): void {
    this.clientService.getClients().subscribe({
      next: (clients: any) => {
        this.clients = clients;
      },
      error: (error: any) => { // Spécifiez explicitement le type de 'error' comme 'any'
        console.error('Erreur lors de la récupération des articles : ', error);
      }
    });
  }
  delete(clientId: string): void {
    this.clientService.deleteClient(clientId).subscribe({
      next: (data) => {
        console.log('L\'article a été supprimé avec succès : ', data);
        // Mettre à jour la liste des articles après la suppression
        this.getClients();
      },
      error: (error) => {
        console.error('Une erreur s\'est produite lors de la suppression de client : ', error);
      }
    });
  }
 
}
