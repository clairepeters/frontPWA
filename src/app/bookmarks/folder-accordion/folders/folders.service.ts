import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnlineOfflineService } from '../../../database/online-offline.service';
import {ApiService} from '../../../api-service.service';

import { IdbService } from '../../../database/idb.service';
@Injectable({
  providedIn: 'root'
})
//this can be used when adding and removing folders. it also has code for online offline stuff that isnt being used
export class FoldersService {
  folders: any = [];
  

  constructor(
    private http: HttpClient,
    private readonly onlineOfflineService: OnlineOfflineService,
    public api: ApiService
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
    this.folders = [];
      this.api.getBookmarks().subscribe((data: {}) => {
        console.log(data);
        this.folders = data["recordset"];
        return this.folders;
      });
  }

  setFolders(newfolders) {
    this.folders = newfolders;
  }
}
