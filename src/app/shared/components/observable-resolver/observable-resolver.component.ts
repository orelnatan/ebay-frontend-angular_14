import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { finalize, isObservable, Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'observable-resolver',
  template: `
    <ng-content></ng-content>
  `,
  standalone: true,
})
export class ObservableResolverComponent<T> implements OnChanges {
    @Input() observable: Observable<T>;

    @Output() resolved: EventEmitter<T> = new EventEmitter();
    @Output() failed: EventEmitter<HttpErrorResponse> = new EventEmitter();
    @Output() start: EventEmitter<void> = new EventEmitter();
    @Output() done: EventEmitter<void> = new EventEmitter();

    public data: T;
    public error: HttpErrorResponse;
    public inProcess: boolean;

    ngOnChanges(): void {
        if(isObservable(this.observable)) {
            this.inProcess = true;

            this.start.emit();
            this.observable.pipe(untilDestroyed(this),
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
}
