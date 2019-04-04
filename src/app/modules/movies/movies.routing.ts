import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { moviesPaths } from 'src/app/utils/front-paths';

const routes: Routes = [
  {
    path: moviesPaths.movies,
    component: MoviesComponent
  },
  {
    path: moviesPaths.createMovie,
    component: CreateMovieComponent
  },
  {
    path: moviesPaths.editMovie,
    component: EditMovieComponent
  }
];

export const MoviesRoutes = RouterModule.forChild(routes);
