import { Movie } from '../movie.model';
import { DIRECTORS } from './director-mocks';

export const MOVIES: Movie[] = [{
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
