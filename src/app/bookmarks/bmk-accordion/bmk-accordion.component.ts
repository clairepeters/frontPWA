import { Component, OnInit, Input } from '@angular/core';
import { BookmarksService } from './bmk-service/bookmarks.service'
import { ActivatedRoute, Router } from '@angular/router';
import {ApiService} from '../../api-service.service';

@Component({
  selector: 'app-bmk-accordion',
  templateUrl: './bmk-accordion.component.html',
  styleUrls: ['./bmk-accordion.component.scss']
})
export class BmkAccordionComponent implements OnInit {

  items;
  bookmarks: any = [];

  constructor(
    private route: ActivatedRoute,
    private bookmarksService: BookmarksService,
    private router: Router,
    public api: ApiService

  ) {
    //set items to the array that the service allows us to grab
    this.items = this.bookmarksService.getBookmarks();
  } //end constructor


  @Input() DOCUMENTID= {documentID:''};
    
  ngOnInit() {
    this.getBookmarks();
  }
  
  getBookmarks() {
    this.bookmarks = [];
    this.api.getBookmarks().subscribe((data: {}) => {
      console.log(data);
      this.bookmarks = data["recordsets"][0];
      console.log(this.bookmarks)
    });
  }

  deleteBookmark(DOCUMENTID) {
    this.api.deleteBookmark(DOCUMENTID)
      .subscribe(res => {
        this.getBookmarks();
      }, (err) => {
        console.log(err);
      });
  }

}
