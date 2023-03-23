import { NgModule } from '@angular/core';

import { ModalModule, SpinnerModule } from '@ebay/shared/components';

import { LoaderModalComponent } from './loader-modal.component';

@NgModule({
    declarations: [ 
        LoaderModalComponent,
    ],
    imports: [
        SpinnerModule,
        ModalModule
    ],
})
export class LoaderModalModule {}