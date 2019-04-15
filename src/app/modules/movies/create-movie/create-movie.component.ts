import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/api/movie.service';
import { isObservable } from 'rxjs';
import { Router } from '@angular/router';
import { moviesPaths } from 'src/app/utils/front-paths';
import { Director } from 'src/app/models/director.model';
import { DirectorService } from 'src/app/api/director.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent {

  movie: Movie;
  directors: Director[];

  constructor(
    private directorService: DirectorService,
    private movieService: MovieService,
    private router: Router
  ) {
    this.initComponent();
  }

  private initComponent() {
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

  public saveMovie(movie: Movie) {
    this.assignDirectors(movie);
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

  private assignDirectors(movie: Movie) {
    movie.directors = [];
    movie.directorIds.forEach(directorId => {
      movie.directors.push(this.directors.find(item => item.id === directorId));
    });
  }

}
