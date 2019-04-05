import { Director } from '../director.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirectorMocks {

  private directors: Director[] = [{
    id: 1,
    name: 'Tarantino',
    gender: 'M'
  }, {
    id: 2,
    name: 'Ford Coppola',
    gender: 'M'
  }, {
    id: 3,
    name: 'Anthony Russo',
    gender: 'M'
  }, {
    id: 4,
    name: 'Joseph Russo',
    gender: 'M'
  }];

  public index(): Director[] {
    return this.directors;
  }

  public get(id: number): Director {
    return this.directors.find(item => id === item.id);
  }

  public create(director: Director): Director {
    this.directors.push(director);
    return director;
  }

  public update(director: Director): Director {
    this.directors.map((item: Director, index: number, array: Director[]) => {
      if (director.id === item.id) {
        array[index] = director;
      }
    });
    return this.directors.find(item => director.id === item.id);
  }

  public delete(director: Director) {
    const directorToDelete = this.directors.findIndex(item => director.id === item.id);
    this.directors.splice(directorToDelete, 1);
  }
}
