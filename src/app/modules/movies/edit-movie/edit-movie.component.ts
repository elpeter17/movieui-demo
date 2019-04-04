import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent {

  movie: Movie = this.router.getCurrentNavigation().extras.state.movieToEdit;

  constructor(
    private router: Router
  ) { }

}
