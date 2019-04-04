import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Movie } from '../models/movie.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends ApiService {

  public get(id: number): Movie | Observable<Movie> {
    return this.mocking ?
      this.movieMocks.get(id) :
      this.http.get<Movie>(`${this.endpoints.movies}/${id}`);
  }

  public index(): Movie[] | Observable<Movie[]> {
    return this.mocking ? this.movieMocks.index() : this.http.get<Movie[]>(this.endpoints.movies);
  }

  public create(movie: Movie): Movie | Observable<Movie> {
    const create = this.mocking ?
      this.movieMocks.create(movie) :
      this.http.post<Movie>(`${this.endpoints.movies}/${movie.id}`, movie);
    return create;
  }

  public update(movie: Movie): Movie | Observable<Movie> {
    const update = this.mocking ?
      this.movieMocks.update(movie) :
      this.http.put<Movie>(`${this.endpoints.movies}/${movie.id}`, movie);
    return update;
  }

}
