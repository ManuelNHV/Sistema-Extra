import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class OfertaJobService {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
    return !this.Token.loggedIn();
  }
  
  constructor(private Token: TokenService) { }
}
