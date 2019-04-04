import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutes } from './movies.routing';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { FormMovieComponent } from './form-movie/form-movie.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutes,
    ReactiveFormsModule,
  ],
  declarations: [
    MoviesComponent,
    CreateMovieComponent,
    EditMovieComponent,
    FormMovieComponent
  ]
})
export class MoviesModule { }
