import { NgModule } from '@angular/core';

import { 
  RxResolverDirective,
  NgLetDirective,
  BreakpointObserverDirective,
  ImageNotFoundDirective 
} from './directives';

import { 
  RegExpPipe,
  SuffixPipe,
  ImagePipe
} from './pipes';

@NgModule({
  declarations: [
    RegExpPipe,
    SuffixPipe,
    ImagePipe,
    RxResolverDirective,
    NgLetDirective,
    BreakpointObserverDirective,
    ImageNotFoundDirective
  ],
  exports: [
    RegExpPipe,
    SuffixPipe,
    ImagePipe,
    RxResolverDirective,
    NgLetDirective,
    BreakpointObserverDirective,
    ImageNotFoundDirective
  ]
})
export class UtilsModule {}