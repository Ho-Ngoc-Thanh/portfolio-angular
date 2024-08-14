import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/features/services/authService/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardsGuard implements CanActivate {
  user = {
    account: '',
  };
  constructor(private authService: AuthServiceService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(this.authService.getRole);
    if (this.authService.getRole === 'admin') {
      console.log(this.authService.getRole);
      return true;
    }
    return false;
  }
}
