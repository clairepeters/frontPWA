import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class BookmarksService {
  constructor(
    private http: HttpClient
  ) {
    
   }
  items = [];

  addToBookmarks(document) {
    this.items.push(document);
  }

  getBookmarks() {
    return this.items;
  }

  clearBookmarks() {
    this.items = [];
    return this.items;
  }

  getMoreData() {
    return this.http.get('/assets/moreData.json');
  }
}
