import { Component, OnInit, Input } from '@angular/core';
import { BookmarksService } from './recent-service/recent.service'
import { ActivatedRoute, Router } from '@angular/router';
import {ApiService} from '../../api-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bmk-accordion',
  templateUrl: './bmk-accordion.component.html',
  styleUrls: ['./bmk-accordion.component.scss']
})
export class BmkAccordionComponent implements OnInit {

  recents;
  bookmarks: any = [];
  dataSource: MatTableDataSource<Document>;
  displayedColumns: string[] = ['name', 'customColumn1'];
  documents: any = [];

  constructor(
    private route: ActivatedRoute,
    private bookmarksService: BookmarksService,
    private router: Router,
    public api: ApiService

  ) {
    //set items to the array that the service allows us to grab
    this.recents = this.bookmarksService.getRecents();
  } //end constructor


  @Input() DOCUMENTID= {documentID:''};
    
  ngOnInit() {
    this.getBookmarks();
    this.dataSource = new MatTableDataSource(); // create new object
  }
 
  getBookmarks() {
    this.bookmarks = [];
    this.api.getBookmarks().subscribe((data: {}) => {
      console.log(data);
      this.dataSource.data = data["recordsets"][0];
      return data;
    });
  }
  faChevronRight = faChevronRight;
  deleteBookmark(DOCUMENTID) {
    this.api.deleteBookmark(DOCUMENTID)
      .subscribe(res => {
        this.getBookmarks();
      }, (err) => {
        console.log(err);
      });
  }

}
