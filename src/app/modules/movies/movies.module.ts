import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutes } from './movies.routing';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutes
  ],
  declarations: [
    MoviesComponent
  ]
})
export class MoviesModule { }
