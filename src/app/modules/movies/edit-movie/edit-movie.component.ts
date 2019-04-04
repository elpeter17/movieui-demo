import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/api/movie.service';
import { isObservable } from 'rxjs';
import { moviesPaths } from 'src/app/utils/front-paths';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent {

  public movie: Movie;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {
    this.initComponent();
  }

  private initComponent() {
    const state = this.router.getCurrentNavigation().extras.state;
    if (typeof state === 'undefined') {
      this.getMovie();
    } else {
      this.movie = state.movieToEdit;
    }
  }

  private getMovie() {
    this.activatedRoute.params.subscribe(params => {
      const resource = this.movieService.get(Number(params.id));
      if (isObservable(resource)) {
        resource.subscribe(
          response => {
            this.movie = response;
          }
        );
      } else {
        this.movie = resource;
      }
    });
  }

  public saveMovie(movie: Movie) {
    const resource = this.movieService.update(movie);
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
