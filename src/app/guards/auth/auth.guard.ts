import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { moviesPaths, directorPaths } from 'src/app/utils/front-paths';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(next);
    console.log(state);
    const routeToAccess = state.url.replace('/', '');
    if (!this.authenticated()) {
      if (routeToAccess === directorPaths.directors) {
        alert('No tiene permiso para acceder a directores');
      } else if (routeToAccess === moviesPaths.movies) {
        alert('No tiene permiso para acceder a películas');
      } else {
        alert('No tiene permiso para acceder a la ruta');
      }
      this.router.navigate([moviesPaths.movies]);
    }
    return this.authenticated();
  }

  private authenticated(): boolean {
    return false;
  }

}
