import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/api/movie.service';
import { isObservable } from 'rxjs';
import { moviesPaths } from 'src/app/utils/front-paths';
import { DirectorService } from 'src/app/api/director.service';
import { Director } from 'src/app/models/director.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent {

  public movie: Movie;
  public directors: Director[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private directorService: DirectorService,
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
    this.directorService.index().subscribe(
      response => {
        this.directors = response;
      },
      error => {
        console.error(error);
        this.directors = this.directorService.indexMocks();
      }
    );
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
    this.assignDirectors(movie);
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

  private assignDirectors(movie: Movie) {
    movie.directors = [];
    movie.directorIds.forEach(directorId => {
      movie.directors.push(this.directors.find(item => item.id === directorId));
    });
  }

}
