import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/api/movie.service';
import { isObservable } from 'rxjs';
import { Router } from '@angular/router';
import { moviesPaths } from 'src/app/utils/front-paths';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent {

  movie: Movie;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  public saveMovie(movie: Movie) {
    const resource = this.movieService.create(movie);
    if (isObservable(resource)) {
      resource.subscribe(
        _ => {
          this.router.navigate([moviesPaths.movies]);
        }
      );
    } else {
      this.router.navigate([moviesPaths.movies]);
    }
  }

}
