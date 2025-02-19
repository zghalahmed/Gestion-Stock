import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Tableau',
      icon: 'fas fa-chart-line',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: 'Vue d\'ensemble',
          icon: 'fas fa-chart-pie',
          url: ''
        },
        {
          id: '12',
          titre: 'Statistiques',
          icon: 'fas fa-chart-bar',
          url: 'statistiques'
        }
      ]
    },
      {
        id: '2',
        titre: 'Articles',
        icon: 'fas fa-boxes',
        url: '',
        sousMenu: [
          {
            id: '21',
            titre: 'Articles',
            icon: 'fas fa-boxes',
            url: 'articles'
          },
          {
            id: '22',
            titre: 'Mouvements du stock',
            icon: 'fab fa-stack-overflow',
            url: 'mvtstk'
          }
        ]
      },
      {
        id: '3',
        titre: 'Clients',
        icon: 'fas fa-users',
        url: '',
        sousMenu: [
          {
            id: '31',
            titre: 'Clients',
            icon: 'fas fa-users',
            url: 'clients'
          }
         
        ]
      },
      {
        id: '4',
        titre: 'Fournisseurs',
        icon: 'fas fa-users',
        url: '',
        sousMenu: [
          {
            id: '41',
            titre: 'Fournisseurs',
            icon: 'fas fa-users',
            url: 'fournisseurs'
          }
         
        ]
      },
      {
        id: '5',
        titre: 'Parametrage',
        icon: 'fas fa-cogs',
        url: '',
        sousMenu: [
          {
            id: '51',
            titre: 'Categories',
            icon: 'fas fa-tools',
            url: 'categories'
          },
         
      ]
    }
  ];

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  navigate(url? : string):void{
    this.router.navigate([url]);
  }
}
