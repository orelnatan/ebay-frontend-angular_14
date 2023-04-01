import { NgModule } from '@angular/core';

import { RegExpPipe } from './reg-exp.pipe';

@NgModule({
    declarations: [
        RegExpPipe
    ],
    exports: [
        RegExpPipe
    ]
})
export class PipesModule {}