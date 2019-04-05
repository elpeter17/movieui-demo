import { Routes, RouterModule } from '@angular/router';
import { ListDirectorsComponent } from './list-directors/list-directors.component';
import { directorPaths } from 'src/app/utils/front-paths';

const routes: Routes = [
  {
    path: directorPaths.directors,
    component: ListDirectorsComponent
  }
];

export const DirectorsRoutes = RouterModule.forChild(routes);
