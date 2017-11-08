import { BackgroundService } from './../background.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegGuard implements CanActivate {

  constructor(back: BackgroundService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let nm = next.params['usNm'];
    if (nm.length >= 3) {
      return true;
    }

    return false;
  }
}
