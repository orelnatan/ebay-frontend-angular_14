import { Injectable, }  from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

import { StorageProperties } from '../models';
import { Ebay, StorageTypes } from '../types';

@Injectable()
export class EbayLocalStorageService {
    private storage: Ebay;

    constructor() {
        this.storage = JSON.parse(localStorage.getItem("Ebay")!) || {};
    }

    public get(property: StorageProperties): Observable<StorageTypes> {
        return new Observable((observer: Subscriber<StorageTypes>): void => {
            observer.next(this.storage[property]);
        })
    }

    public set(property: StorageProperties, value: StorageTypes): void {
        this.storage[property] = value;

        this.update(this.storage);
    }

    public clear(): void {
        this.storage = {} as Ebay;

        this.update(this.storage);
    }

    private update(storage: Ebay): void {
        localStorage.removeItem("Ebay");

        localStorage.setItem("Ebay", JSON.stringify(storage));
    }
}