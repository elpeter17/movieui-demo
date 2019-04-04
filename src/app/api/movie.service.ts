import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Movie } from '../models/movie.model';
import { Observable, of } from 'rxjs';
import { MOVIES } from '../models/mocks/movie-mocks';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends ApiService {

  public index(): Observable<Movie[]> {
    return this.mocking ? of<Movie[]>(MOVIES) : this.http.get<Movie[]>(this.endpoints.movies);
  }

}
