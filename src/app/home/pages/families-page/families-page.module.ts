import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
import { FamiliesService } from '@ebay/home/services';
import { FamilyCardModule } from '@ebay/home/components';
import { ICrumb } from '@ebay/shared/breadcrumbs/models';

import { FamiliesPageComponent } from './families-page.component';

@NgModule({
    declarations: [
        FamiliesPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        FamilyCardModule,
        DirectivesModule,
        ElementsGridModule,
        RouterModule.forChild([
            { path: '', redirectTo: 'families', pathMatch: 'full' },
            { 
                path: 'families',
                component: FamiliesPageComponent,
                data: {
                    crumbs: [
                        {
                            path: "families",
                            name: "Families"
                        }
                    ] as Array<ICrumb>
                }
            },
        ])
    ],
    providers: [
        FamiliesService
    ]
})
export class FamiliesPageModule {}