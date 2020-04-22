import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnlineOfflineService } from '../../../database/online-offline.service';

import { IdbService } from '../../../database/idb.service';
@Injectable({
  providedIn: 'root'
})
export class FoldersService {
  private folders = [];
  

  constructor(
    private http: HttpClient,
    private readonly onlineOfflineService: OnlineOfflineService,
  ) {
    this.registerToEvents(onlineOfflineService);
  }

  private registerToEvents(onlineOfflineService: OnlineOfflineService) {
    onlineOfflineService.connectionChanged.subscribe(online => {
      if (online) {
        console.log('went online');
        console.log('sending all stored items');
      } else {
        console.log('went offline, storing in indexdb');
      }
    });
  }





  addFolder(folder) {
    
    this.folders.push(folder);
  }

  getFolders() {
    return this.folders;
  }

  setFolders(newfolders) {
    this.folders = newfolders;
  }
}
