import { Injectable, } from '@angular/core';
import { Router, UrlTree, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';

import { StorageKeys } from '@ebay/core/models';
import { EbayLocalStorageService } from '@ebay/core/services';

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
        const redirectToWhileNotAuthenticated: string = route.data['redirectToWhileNotAuthenticated'] || REDIRECT_TO_WHILE_NOT_AUTHENTICATED;
        const redirectToWhileAuthenticated: string = route.data['redirectToWhileAuthenticated'] || REDIRECT_TO_WHILE_AUTHENTICATED;
      
        return new Observable((observer: Subscriber<boolean | UrlTree>): void => {
            this.ebayLocalStorageService.retrieve<IUser>(StorageKeys.User).subscribe((user: IUser): void => {
                if(!blockWhileAuthenticated) { 
                    // Block while not authenticated(default)
                    observer.next(user ? true : this.router.createUrlTree([redirectToWhileNotAuthenticated], { 
                        queryParams: { returnUrl: state.url }
                    })); 
                } else { 
                    // Block while authenticated
                    observer.next(!user ? true : this.router.createUrlTree([redirectToWhileAuthenticated])); 
                }
            })
        })
    }
}