import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { EbayLocalStorageService } from '@ebay/core/services';
import { GlobalEventTypes, StorageKeys } from '@ebay/core/models';
import { IUser } from '@ebay/auth/models';
import { GlobalEventsService } from '@ebay/shared/global-events';
import { LogoutModalComponent } from '@ebay/shared/modals';

@UntilDestroy()
@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
})
export class AppNavbarComponent {  
  constructor(
    private readonly ebayLocalStorageService: EbayLocalStorageService,
    private readonly globalEventsService: GlobalEventsService,
    private readonly matDialog: MatDialog,
  ) {}

  get user$(): Observable<IUser> {
    return this.ebayLocalStorageService.retrieve<IUser>(StorageKeys.User);
  }

  dispatchToggle(): void {
    this.globalEventsService.dispatch(
        GlobalEventTypes.Toggle
    )
  }

  dispatchLogout(): void {
    this.globalEventsService.dispatch(
        GlobalEventTypes.Logout
    )
  }

  showLogoutDialog(): void {
    this.matDialog.open(LogoutModalComponent)
    .afterClosed()
    .pipe(untilDestroyed(this))
    .subscribe((logout: boolean) => {
        logout && this.dispatchLogout();
    })
  }
}
