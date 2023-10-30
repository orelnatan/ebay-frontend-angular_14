import { Injectable, } from '@angular/core';
import { Router, UrlTree, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, map } from 'rxjs';

import { EbayLocalStorageService } from '@ebay/core/services';
import { StorageKeys } from '@ebay/core/models';

import { IUser } from '../models';

const BLOCK_WHILE_AUTHENTICATED: boolean = false;
const REDIRECT_TO_WHILE_NOT_AUTHENTICATED: string = "/auth";
const REDIRECT_TO_WHILE_AUTHENTICATED: string = "/home";

@Injectable()
export class AuthGuard implements CanActivateChild {
  constructor(
    private readonly ebayLocalStorageService: EbayLocalStorageService,
    private readonly router: Router
  ) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    const blockWhileAuthenticated: boolean = route.data['blockWhileAuthenticated'] || BLOCK_WHILE_AUTHENTICATED;
    
    return this.ebayLocalStorageService.retrieve<IUser>(StorageKeys.User).pipe(
      map((user: IUser) => {
        if(!blockWhileAuthenticated) { 
            // Block while not authenticated(default)
            return user ? true : this.router.createUrlTree([REDIRECT_TO_WHILE_NOT_AUTHENTICATED], { 
            queryParams: { returnUrl: state.url }
          }); 
        } else { 
          // Block while authenticated
          return !user ? true : this.router.createUrlTree([REDIRECT_TO_WHILE_AUTHENTICATED]); 
        }
      })
    ) 
  }
}