import { Routes, RouterModule } from '@angular/router';
import { directorPaths } from './utils/front-paths';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: directorPaths.directors,
    loadChildren: './modules/directors/directors.module#DirectorsModule'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
