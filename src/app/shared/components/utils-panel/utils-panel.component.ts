import { Component } from '@angular/core';

import { NavigationTreeService } from '@ebay/core/services';

@Component({
  selector: 'utils-panel',
  templateUrl: './utils-panel.component.html',
  styleUrls: ['./utils-panel.component.scss'],
})
export class UtilsPanelComponent {
    constructor(
        private readonly navigationTree: NavigationTreeService
    ) {}

    get isDisabled(): boolean {
        return this.navigationTree.isCurrentNodeDisabled();
    }

    backToPreviousRoute(): void {
        this.navigationTree.restorePreviousNode();
    }
}
