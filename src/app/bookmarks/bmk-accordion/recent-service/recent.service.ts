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

  addToRecents(document) {
    this.items.push(document);
  }

  getRecents() {
    return this.items;
  }

  clearRecents() {
    this.items = [];
    return this.items;
  }
}
