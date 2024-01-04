import { Directive, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize, isObservable, Observable, Subscription } from 'rxjs';

declare type defaultT = any;

@Directive({
  selector: '[rxSubscriber]',
  exportAs: 'subscriber'
})
export class RxSubscriberDirective<T> implements OnChanges, OnDestroy {
  @Input('rxSubscriber') observable$: Observable<T>;
  @Input() default: defaultT;
  
  @Output() subscribe: EventEmitter<T> = new EventEmitter();
  @Output() failed: EventEmitter<HttpErrorResponse> = new EventEmitter();
  @Output() start: EventEmitter<void> = new EventEmitter();
  @Output() done: EventEmitter<void> = new EventEmitter();

  private _data: T;
  private _inProcess: boolean;
  private _error: HttpErrorResponse;
  private _subscription: Subscription;

  ngOnChanges(): void {
    this._data = this.default;

    this._subscription?.unsubscribe();
    if(isObservable(this.observable$)) {
      this._inProcess = true;

      this.start.emit();
      this._subscription = this.observable$.pipe(
        finalize(() => { 
          this._inProcess = false;

          this.done.emit();
        })
      ).subscribe({
        next: (response: T): void => {
          this._data = response;

          this.subscribe.emit(response);
        },
        error: (error: HttpErrorResponse): void => {
          this._error = error;
          
          this.failed.emit(error);
        },
      })
    }
  }

  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }

  get data(): T {
    return this._data;
  }

  get error(): HttpErrorResponse {
    return this._error;
  }

  get inProcess(): boolean {
    return this._inProcess
  }
}