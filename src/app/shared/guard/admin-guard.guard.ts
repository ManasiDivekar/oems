import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AllserviceService } from '../allservice.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanLoad {
  constructor(private allservice:AllserviceService){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.allservice.loginStatusSubject;
  }
}
