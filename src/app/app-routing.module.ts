import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';
import { PageArticleComponent } from './pages/article/page-article/page-article.component';
import { NouvelArticleComponent } from './pages/article/page-article/nouvel-article/nouvel-article.component';
import { MvtstkComponent } from './pages/mouvementstock/mvtstk/mvtstk.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt/nouveau-clt-frs.component';
import { NouveauFrsComponent } from './composants/nouveau-frs/nouveau-frs/nouveau-frs.component';
import { PageCategorieComponent } from './pages/categories/page-categorie/page-categorie.component';
import { NouvellecategorieComponent } from './pages/categories/nouvellecategorie/nouvellecategorie.component';
import { MouvementstockComponent } from './pages/mouvementstock/mouvementstock.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component:PageLoginComponent
  },
  {
    path:'inscrire',
    component:PageInscriptionComponent
  },
  {
    path:'',
    component:PageDashboardComponent,
    children:[{
      path:'statistiques',
      component:PageStatistiqueComponent
    },
    {
      path:'articles',
      component:PageArticleComponent
    },
    {
    path:'nouvelarticle',
    component:NouvelArticleComponent
    },
    {
      path:'mouvementstock',
      component:MouvementstockComponent
      },
    {
      path:'mvtstk',
      component:MvtstkComponent
      },
      {
        path:'clients',
        component:PageClientComponent
        },
        {
          path:'nouveauclient',
          component:NouveauCltFrsComponent
          },
          
        {
          path:'fournisseurs',
          component:PageFournisseurComponent
          },
          {
            path:'nouveaufournisseur',
            component:NouveauFrsComponent
            },
            {
              path:':id/edite',
              component:NouveauFrsComponent
              },
            
              {
                path:':id/edit',
                component:NouvelArticleComponent
                },
                {
                  path:':id/editt',
                  component:NouveauCltFrsComponent
                  },
                  {
                    path:'categories',
                    component:PageCategorieComponent
                    },
                    {
                      path:'nouvellecategorie',
                      component:NouvellecategorieComponent
                      },
                      {
                        path:':id/edittt',
                        component:NouvellecategorieComponent
                        }


  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
