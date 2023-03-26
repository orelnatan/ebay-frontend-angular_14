import { Injectable, }  from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

import { Ebay, StorageKeys, StorageValues } from '../models';

const LOCAL_STORAGE_NAME: string = "Ebay";

@Injectable()
export class EbayLocalStorageService {
    private storage: Ebay;

    constructor() {
        this.storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME)!) || {};
    }

    public retrieve<T extends StorageValues>(key: StorageKeys): Observable<T> {
        return new Observable((observer: Subscriber<T>): void => {
            observer.next(this.storage[key] as T);
        })
    }

    public store(key: StorageKeys, value: StorageValues): void {
        this.storage[key] = value;

        this.update(this.storage);
    }

    public clear(): void {
        this.storage = {} as Ebay;

        this.update(this.storage);
    }

    private update(storage: Ebay): void {
        localStorage.removeItem(LOCAL_STORAGE_NAME);

        localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(storage));
    }
}