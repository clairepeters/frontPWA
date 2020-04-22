import { Component, OnInit } from '@angular/core';
import { BookmarksService } from './bmk-service/bookmarks.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bmk-accordion',
  templateUrl: './bmk-accordion.component.html',
  styleUrls: ['./bmk-accordion.component.scss']
})
export class BmkAccordionComponent implements OnInit {

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
