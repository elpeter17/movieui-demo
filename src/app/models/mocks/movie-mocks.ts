import { Movie } from '../movie.model';
import { DIRECTORS } from './director-mocks';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieMocks {

  private movies: Movie[] = [{
    id: 1,
    title: 'Avengers Endgame',
    year: 2019,
    rating: 4,
    directors: [
      DIRECTORS[2],
      DIRECTORS[3],
    ]
  }, {
    id: 2,
    title: 'Kill Bill 1',
    year: 2003,
    rating: 5,
    directors: [
      DIRECTORS[0]
    ]
  }, {
    id: 3,
    title: 'The Godfather',
    year: 1972,
    rating: 5,
    directors: [
      DIRECTORS[1]
    ]
  }];

  public index(): Movie[] {
    return this.movies;
  }

  public get(id: number): Movie {
    return this.movies.find(item => id === item.id);
  }

  public create(movie: Movie): Movie {
    this.movies.push(movie);
    return movie;
  }

  public update(movie: Movie): Movie {
    this.movies.map((item: Movie, index: number, array: Movie[]) => {
      if (movie.id === item.id) {
        array[index] = movie;
      }
    });
    return this.movies.find(item => movie.id === item.id);
  }

  public delete(movie: Movie) {
    const movieToDelete = this.movies.findIndex(item => movie.id === item.id);
    this.movies.splice(movieToDelete, 1);
  }
}
