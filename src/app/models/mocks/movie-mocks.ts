import { Movie } from '../movie.model';
import { Injectable } from '@angular/core';
import { DirectorMocks } from './director-mocks';
import { Director } from '../director.model';

@Injectable({
  providedIn: 'root'
})
export class MovieMocks {

  constructor(
    private directorMocks: DirectorMocks
  ) {

  }

  private movies: Movie[] = [{
    id: 1,
    title: 'Avengers Endgame',
    year: 2019,
    rating: 4,
    directors: [
      this.directorMocks.get(3),
      this.directorMocks.get(4)
    ]
  }, {
    id: 2,
    title: 'Kill Bill 1',
    year: 2003,
    rating: 5,
    directors: [
      this.directorMocks.get(1)
    ]
  }, {
    id: 3,
    title: 'The Godfather',
    year: 1972,
    rating: 5,
    directors: [
      this.directorMocks.get(2)
    ]
  }];

  public index(): Movie[] {
    return this.movies;
  }

  public get(id: number): Movie {
    return this.movies.find(item => id === item.id);
  }

  public create(movie: Movie): Movie {
    this.assignDirectors(movie);
    this.movies.push(movie);
    return movie;
  }

  public update(movie: Movie): Movie {
    this.assignDirectors(movie);
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
    return 'Movie deleted';
  }

  private assignDirectors(movie: Movie) {
    movie.directors = [];
    movie.directorIds.forEach(directorId => {
      movie.directors.push(this.directorMocks.get(directorId));
    });
  }
}
