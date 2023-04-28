import { Component, Input, OnInit } from '@angular/core';

import { ICrumb } from '../../models';

@Component({
    selector: 'crumb',
    templateUrl: './crumb.component.html',
    styleUrls: ['./crumb.component.scss'],
})
export class CrumbComponent implements OnInit {
    @Input() crumb: ICrumb;
    @Input() parent: string;

    loading: boolean;
    
    ngOnInit(): void {
        if(this.crumb.async) {
            this.loading = true;

            this.crumb.async?.then((crumb: ICrumb): void => {
                this.loading = false;
           
                this.crumb = { ... this.crumb, ... crumb };
            });
        }
    }
}