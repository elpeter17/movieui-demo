import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Director } from '../models/director.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectorService extends ApiService {

  public index(): Director[] | Observable<Director[]> {
    return this.mocking ? this.directorMocks.index() : this.http.get<Director[]>(this.endpoints.directors);
  }

}
