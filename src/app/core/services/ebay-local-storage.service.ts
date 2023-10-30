import { Injectable, }  from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

import { ServiceInterceptor } from '@ebay/shared/global-events';

import { Ebay, GlobalEventTypes, StorageKeys, StorageValues } from '../models';

const LOCAL_STORAGE_NAME: string = "Ebay";

@ServiceInterceptor(
  [{ type: GlobalEventTypes.Logout, action: "clear" }]
)
@Injectable()
export class EbayLocalStorageService {
  private _storage: Ebay;

  constructor() {
    this._storage = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_NAME)!
    ) || {};
  }

  public retrieve<T extends StorageValues>(key: StorageKeys): Observable<T> {
    return new Observable((observer: Subscriber<T>): void => {
      observer.next(this._storage[key] as T);
    })
  }

  public store(key: StorageKeys, value: StorageValues): void {
    this._storage[key] = value;

    this._update(this._storage);
  }

  public clear(): void {
    this._storage = {} as Ebay;

    this._update(this._storage);
  }

  private _update(storage: Ebay): void {
    localStorage.removeItem(LOCAL_STORAGE_NAME);

    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(storage));
  }
}