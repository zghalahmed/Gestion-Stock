import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Categorie } from 'src/interfaces/categorie';
import { ArticlesService } from 'src/services/articles.service';
import { CategorieService } from 'src/services/categorie.service';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.css']
})
export class NouvelArticleComponent implements OnInit {
  categories: Categorie[] = [];
  idcourant: string = '';
  form!: FormGroup;
  imgUrl: string | null = null;


  constructor(
    private MS: ArticlesService,
    private router: Router,
    private activatedroute: ActivatedRoute,
    private CS: CategorieService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.idcourant = this.activatedroute.snapshot.params['id'];

    if (!!this.idcourant) {
      this.MS.getArticleById(this.idcourant).subscribe(m => {
        this.initForm1(m);
      });
    } else {
      this.initForm();
    }
    this.loadCateg();
  }

  initForm(): void {
    this.form = new FormGroup({
      codearticle: new FormControl(null, [Validators.required]),
      designation: new FormControl(null, [Validators.required]),
      prixunitht: new FormControl(null, [Validators.required]),
      tauxtva: new FormControl(null, [Validators.required]),
      quantite: new FormControl(null, [Validators.required]),
      cat: new FormControl(null),
      image: new FormControl(null)

    });
  }

  initForm1(x: any): void {
    this.form = new FormGroup({
      codearticle: new FormControl(x.codearticle, [Validators.required]),
      designation: new FormControl(x.designation, [Validators.required]),
      prixunitht: new FormControl(x.prixunitht, [Validators.required]),
      tauxtva: new FormControl(x.tauxtva, [Validators.required]),
      quantite: new FormControl(x.quantite, [Validators.required]),
      cat: new FormControl(x.cat),
      image: new FormControl(null)

    });
  }

  loadCateg(): void {
    this.CS.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onFileInput(files: FileList): void {
    if (files && files.length > 0) {
      const file = files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'dalidd'); // Replace with your Cloudinary upload preset

      this.http.post<any>('https://api.cloudinary.com/v1_1/dexzirjuk/image/upload', formData)
        .subscribe(
          (res) => {
            this.imgUrl = res.secure_url;
            this.form.get('image')?.setValue(this.imgUrl);
          },
          (err) => {
            console.error('Erreur lors du téléchargement de l\'image sur Cloudinary : ', err);
          }
        );
    }
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      console.log('Le formulaire est invalide');
      return;
    }

    const formData = {
      ...this.form.value,
      imageUrls: this.imgUrl ? [this.imgUrl] : []
    };

    if (!!this.idcourant) {
      this.MS.updateArticle(this.idcourant, formData).subscribe(() => {
        this.router.navigate(['/articles']);
      });
    } else {
      this.MS.OnSave(formData).subscribe(() => {
        this.router.navigate(['/articles']);
      });
    }
  }
}
