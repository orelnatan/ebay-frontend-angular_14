import { Directive, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { ICrumb } from '../models';
import { isPromise } from '../utils';

@Directive({
  selector: '[crumbResolver]',
  exportAs: 'resolver'
})
export class CrumbResolverDirective implements OnChanges {
  @Input('crumbResolver') promise: Promise<ICrumb>;

  @Output() resolved: EventEmitter<ICrumb> = new EventEmitter();
 
  private _inProcess: boolean;

  ngOnChanges(): void {
    if(isPromise(this.promise)) {
      this._inProcess = true;

      this.promise.then((crumb: ICrumb) => {
        this._inProcess = false;

        this.resolved.emit(crumb)
      })
    }
  }

  get inProcess(): boolean {
    return this._inProcess
  }
}