import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/api/movie.service';
import { Router } from '@angular/router';
import { moviesPaths } from 'src/app/utils/front-paths';

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
    this.movieService.index().subscribe(
      movies => {
        this.movies = movies;
      }, error => {
        console.log(error);
      }
    );
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

  }

}
