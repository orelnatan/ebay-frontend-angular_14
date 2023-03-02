import { Directive, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize, isObservable, Observable, Subscription } from 'rxjs';

@Directive({
    selector: '[rxResolver]',
    standalone: true,
    exportAs: 'resolver'
})
export class RxResolverDirective<T> implements OnChanges, OnDestroy {
    @Input('rxResolver') observable: Observable<T>;

    @Output() resolved: EventEmitter<T> = new EventEmitter();
    @Output() failed: EventEmitter<HttpErrorResponse> = new EventEmitter();
    @Output() start: EventEmitter<void> = new EventEmitter();
    @Output() done: EventEmitter<void> = new EventEmitter();

    private _subscription: Subscription;

    public data: T;
    public error: HttpErrorResponse;
    public inProcess: boolean;

    ngOnChanges(): void {
        this._subscription?.unsubscribe();

        if(isObservable(this.observable)) {
            this.inProcess = true;

            this.start.emit();
            this._subscription = this.observable.pipe(
                finalize(() => { 
                    this.inProcess = false;

                    this.done.emit();
                })
            ).subscribe({
                next: (response: T): void => {
                    this.data = response;

                    this.resolved.emit(response);
                },
                error: (error: HttpErrorResponse): void => {
                    this.error = error;
                    
                    this.failed.emit(error);
                },
            })
        }
    }

    ngOnDestroy(): void {
        this._subscription?.unsubscribe();
    }
}