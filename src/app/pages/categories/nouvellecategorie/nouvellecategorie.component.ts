import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/services/categorie.service';

@Component({
  selector: 'app-nouvellecategorie',
  templateUrl: './nouvellecategorie.component.html',
  styleUrls: ['./nouvellecategorie.component.css']
})
export class NouvellecategorieComponent {
  idcourant!: string;
  

  constructor(private CS: CategorieService, private router: Router, private activatedroute: ActivatedRoute, ) {
    this.initForm()
  }

  form!: FormGroup;
  ngOnInit():void{//se charge  par defaut qu'on lance le composant
    this.idcourant=this.activatedroute.snapshot.params['id']//cherche id de la route active
     console.log(this.idcourant)//ki mchyna lil create w amlna console 9ina id undefined
   //trully:teste idcourant existe w andha valeur ou undefined
     if(!!this.idcourant){//
       this.CS.getCategorieById(this.idcourant).subscribe((m)=>{//req http en mode get//definie au niveau du service://teb3th li backend une req en mode geth
       this.initForm1(m)
       })
       }
   else this.initForm()
   }

  initForm(): void {
    this.form = new FormGroup({
      codeCat: new FormControl(null, [Validators.required]),
      designationCat: new FormControl(null, [Validators.required]),
    });
  }
  initForm1(x:any): void {
    this.form = new FormGroup({
      codeCat: new FormControl(x.codeCat, [Validators.required]),
      designationCat: new FormControl(x.designationCat, [Validators.required]),
      
    });
  }

  onsub(): void {
    const idcourant=this.activatedroute.snapshot.params['id'];
      if (!!this.idcourant) {
        
        
        this.CS.updateCategories(idcourant, this.form.value).subscribe(() => {
          this.router.navigate(['/categories']);

        });
   } else{
    this.CS.OnSave(this.form.value).subscribe(() => {
      this.router.navigate(['/categories']);
      console.log(this.form.value);
    
    });}
  }
 
 
}


