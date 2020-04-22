import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../bmk-accordion/bmk-service/bookmarks.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.scss']
})
export class RecentsComponent implements OnInit {

  folders;
  //Array of bookmarked items from bookmarks service
  items;


  constructor(
    private route: ActivatedRoute,
    private bookmarksService: BookmarksService,
  ) {
    //set items to the array that the service allows us to grab
    this.items = this.bookmarksService.getBookmarks();
  } //end constructor


  ngOnInit() {
  }

}
