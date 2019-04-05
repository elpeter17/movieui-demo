import { Director } from './director.model';

export class Movie {
  id: number;
  title: string;
  year: number;
  rating: 0 | 1 | 2 | 3 | 4 | 5;

  directors?: Director[];
  directorIds?: number[];
}
