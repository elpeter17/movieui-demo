import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class FormMovieService {

  public form: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    year: new FormControl(2019, [Validators.required, Validators.max(2019)]),
    rating: new FormControl(0)
  });

  public initForm(movie: Movie) {
    this.form.reset(movie);
  }

}
