import { Routes, RouterModule } from '@angular/router';
import { ListDirectorsComponent } from './list-directors/list-directors.component';
import { directorPaths } from 'src/app/utils/front-paths';
import { AuthGuard } from 'src/app/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: directorPaths.directors,
    component: ListDirectorsComponent,
    canActivate: [ AuthGuard ]
  }
];

export const DirectorsRoutes = RouterModule.forChild(routes);
