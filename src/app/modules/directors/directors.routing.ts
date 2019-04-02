import { Routes, RouterModule } from '@angular/router';
import { DirectorsComponent } from './directors.component';

const routes: Routes = [
  {
    path: 'directors',
    component: DirectorsComponent
  }
];

export const DirectorsRoutes = RouterModule.forChild(routes);
