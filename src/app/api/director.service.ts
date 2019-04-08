import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Director } from '../models/director.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectorService extends ApiService {

  public index(): Observable<Director[]> {
    return this.http.get<Director[]>(this.endpoints.directors);
  }

  public create(director: Director): Observable<Director> {
    return this.http.post<Director>(this.endpoints.directors, director);
  }

  public update(director: Director): Observable<Director> {
    return this.http.put<Director>(this.endpoints.directors, director);
  }

  public delete(director: Director): Observable<string> {
    return this.http.delete(`${this.endpoints.directors}/${director.id}`, { responseType: 'text' });
  }

}
