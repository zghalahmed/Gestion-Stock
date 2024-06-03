import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FournisseurrService } from 'src/services/fournisseurr.service';

@Component({
  selector: 'app-nouveau-frs',
  templateUrl: './nouveau-frs.component.html',
  styleUrls: ['./nouveau-frs.component.css']
})
export class NouveauFrsComponent implements OnInit {
  idcourant!: string;
  form!: FormGroup;
  imgUrl: string | null = null;


  constructor(
    private MS: FournisseurrService,
    private router: Router,
    private activatedroute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.idcourant = this.activatedroute.snapshot.params['id'];

    if (!!this.idcourant) {
      this.MS.getFournisseurById(this.idcourant).subscribe((m) => {
        this.initForm1(m);
      });
    } else {
      this.initForm();
    }
  }

  initForm(): void {
    this.form = new FormGroup({
      Nom: new FormControl(null, [Validators.required]),
      Adresse1: new FormControl(null, [Validators.required]),
      Prenom: new FormControl(null, [Validators.required]),
      Adresse2: new FormControl(null, [Validators.required]),
      mail: new FormControl(null, [Validators.required, Validators.email]),
      Ville: new FormControl(null, [Validators.required]),
      Telephone: new FormControl(null, [Validators.required]),
      codepostal: new FormControl(null, [Validators.required]),
      Pays: new FormControl(null, [Validators.required]),
      image:new FormControl(null)
    });
  }

  initForm1(x: any): void {
    this.form = new FormGroup({
      Nom: new FormControl(x.Nom, [Validators.required]),
      Adresse1: new FormControl(x.Adresse1, [Validators.required]),
      Prenom: new FormControl(x.Prenom, [Validators.required]),
      Adresse2: new FormControl(x.Adresse2, [Validators.required]),
      mail: new FormControl(x.mail, [Validators.required, Validators.email]),
      Ville: new FormControl(x.Ville, [Validators.required]),
      Telephone: new FormControl(x.Telephone, [Validators.required]),
      codepostal: new FormControl(x.codepostal, [Validators.required]),
      Pays: new FormControl(x.Pays, [Validators.required]),
      image:new FormControl(null)

    });
  }

  onFileInput(files: FileList | null): void {
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

  onSubmit(): void {
    console.log('Form submitted');
    console.log(this.form.value);

    if (this.form.invalid) {
      console.log('Form is invalid');
      return;
    }

    const formData = {
      ...this.form.value,
      imageUrls: this.imgUrl ? [this.imgUrl] : []
    };

    if (!!this.idcourant) {
      this.MS.updateFournisseurs(this.idcourant, formData).subscribe(() => {
        this.router.navigate(['/fournisseurs']);
      });
    } else {
      this.MS.OnSave(formData).subscribe(() => {
        this.router.navigate(['/fournisseurs']);
      });
    }
  }
}
