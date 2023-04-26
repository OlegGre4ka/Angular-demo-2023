import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { GuardModalService } from '../services/guard-modal.service';

@Injectable({
  providedIn: 'root'
})

export class ExpGuard implements CanActivate {
  constructor(private modalGuardService: GuardModalService, private router: Router, private location: Location) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any
  // : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    return this.modalGuardService.confirmCode$.pipe(
      map(code => {
        if (code!=="123456") {
          this.modalGuardService.openGuardModal();
          return false;
        }
         else {
          return true;
        }
      })
    );
  }
}
