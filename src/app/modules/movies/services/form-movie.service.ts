import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/movie.model';
import { Director } from 'src/app/models/director.model';

@Injectable({
  providedIn: 'root'
})
export class FormMovieService {

  public form: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    year: new FormControl(2019, [Validators.required, Validators.max(2019)]),
    rating: new FormControl(0),
    directorIds: new FormControl([], Validators.compose([Validators.required, Validators.pattern('.+')])),
  });

  public initForm(forCreate: boolean, movie: Movie) {
    this.form.reset({
      id: forCreate ? null : movie.id,
      title: forCreate ? '' : movie.title,
      year: forCreate ? 2019 : movie.year,
      rating: forCreate ? 0 : movie.rating,
      directorIds: forCreate ? [] : this.pluckDirectorIds(movie.directors)
    });
  }

  public pluckDirectorIds(directors: Director[]): number[] {
    const array = [];
    directors.forEach(director => {
      array.push(director.id);
    });
    return array;
  }

}
