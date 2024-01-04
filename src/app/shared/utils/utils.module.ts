import { NgModule } from '@angular/core';

import { 
  RxSubscriberDirective,
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
    RxSubscriberDirective,
    NgLetDirective,
    BreakpointObserverDirective,
    ImageNotFoundDirective
  ],
  exports: [
    RegExpPipe,
    SuffixPipe,
    ImagePipe,
    RxSubscriberDirective,
    NgLetDirective,
    BreakpointObserverDirective,
    ImageNotFoundDirective
  ]
})
export class UtilsModule {}