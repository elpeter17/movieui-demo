import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  }
];

export const MoviesRoutes = RouterModule.forChild(routes);
