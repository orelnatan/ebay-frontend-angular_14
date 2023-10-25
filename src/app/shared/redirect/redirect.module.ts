import { NgModule } from '@angular/core';

import { RedirectService } from './services';
import { RedirectResolver } from './resolvers';
import { RedirectDirective } from './directives';

@NgModule({
    declarations: [ 
        RedirectDirective
    ],
    providers: [
        RedirectResolver
    ],
    exports: [
        RedirectDirective,
    ]
})
export class RedirectModule {
    constructor(
        private readonly redirectService: RedirectService
    ) {}
}