import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovieMocks } from '../models/mocks/movie-mocks';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected mocking = environment.mocking;
  protected MAIN_URL = environment.mainUrl;

  protected readonly endpoints = {
    movies: this.MAIN_URL + '/movies'
  };

  constructor(
    protected http: HttpClient,
    protected movieMocks: MovieMocks
  ) { }

}
