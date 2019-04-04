import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent {

  movie: Movie;

  constructor() { }

}
