import { Component, OnDestroy } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/api/movie.service';
import { Router } from '@angular/router';
import { moviesPaths } from 'src/app/utils/front-paths';
import { Observable, isObservable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  public movies: Movie[];

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {
    this.initComponent();
  }

  private initComponent() {
    const resource = this.movieService.index();
    if (isObservable(resource)) {
      resource.subscribe(
        response => {
          this.movies = response;
        }, error => {
          console.log(error);
        }
      );
    } else {
      this.movies = resource;
    }
  }

  public createMovie() {
    this.router.navigate([moviesPaths.createMovie]);
  }

  public editMovie(movie: Movie) {
    this.router.navigate([moviesPaths.editMovie.replace(':id', movie.id + '')], {
      state: {
        movieToEdit: movie
      }
    });
  }

  public deleteMovie(movie: Movie) {
    this.movieService.delete(movie);
    this.initComponent();
  }

}
