import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { EbayLocalStorageService } from '@ebay/core/services';
import { GEventTypes, StorageKeys } from '@ebay/core/models';
import { GEvent, broadcast } from '@ebay/shared/global-events';
import { LogoutModalComponent } from '@ebay/shared/modals';
import { IUser } from '@ebay/auth/models';

@UntilDestroy()
@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
})
export class AppNavbarComponent {  
  constructor(
    private readonly ebayLocalStorageService: EbayLocalStorageService,
    private readonly matDialog: MatDialog,
  ) {}

  get user$(): Observable<IUser> {
    return this.ebayLocalStorageService.retrieve<IUser>(StorageKeys.User);
  }

  broadcastToggle(): void {
    broadcast(new GEvent(GEventTypes.Toggle));
  }

  broadcastLogout(): void {
    broadcast(new GEvent(GEventTypes.Logout));
  }

  showLogoutDialog(): void {
    this.matDialog.open(LogoutModalComponent)
    .afterClosed()
    .pipe(untilDestroyed(this))
    .subscribe((logout: boolean) => {
      logout && this.broadcastLogout();
    })
  }
}
