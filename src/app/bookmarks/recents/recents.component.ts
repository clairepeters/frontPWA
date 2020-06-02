import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../bmk-accordion/recent-service/recent.service';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../api-service.service';


@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.scss']
})
export class RecentsComponent implements OnInit {

  
  //Array of bookmarked items from bookmarks service
  items;
  


  constructor(
    private route: ActivatedRoute,
    private bookmarksService: BookmarksService,
    public api: ApiService
  ) {
    
  } 


  ngOnInit() {
    // this.bookmarks = this.getBookmarks();
    this.items = this.bookmarksService.getRecents();
  }

  clear(){
    this.bookmarksService.clearRecents();
    this.items = this.bookmarksService.getRecents();
  }
}
