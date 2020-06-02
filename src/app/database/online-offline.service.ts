import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

declare const window: any;
@Injectable({
  providedIn: 'root'
})
export class OnlineOfflineService {
// this is code to create a local database, but it is not currently being used 

  private internalConnectionChanged = new Subject<boolean>();

  get connectionChanged() {
    return this.internalConnectionChanged.asObservable();
  }

  get isOnline() {
    return !!window.navigator.onLine;
  }

  constructor() {
    window.addEventListener('online', () => this.updateOnlineStatus());
    window.addEventListener('offline', () => this.updateOnlineStatus());
  }

  private updateOnlineStatus() {
    this.internalConnectionChanged.next(window.navigator.onLine);
  }
}
