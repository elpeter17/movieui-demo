import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovieMocks } from '../models/mocks/movie-mocks';
import { DirectorMocks } from '../models/mocks/director-mocks';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected mocking = environment.mocking;
  protected MAIN_URL = environment.mainUrl;

  protected readonly endpoints = {
    movies: this.MAIN_URL + '/movies',
    directors: this.MAIN_URL + '/directors'
  };

  constructor(
    protected http: HttpClient,
    // Mocks Services
    protected directorMocks: DirectorMocks,
    protected movieMocks: MovieMocks
  ) { }

}
