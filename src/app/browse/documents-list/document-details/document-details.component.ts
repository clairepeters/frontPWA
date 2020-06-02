import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookmarksService } from '../../../bookmarks/bmk-accordion/recent-service/recent.service'
import { ApiService } from '../../../api-service.service'
import { Router } from '@angular/router';
import { faChevronLeft, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.scss']
})

export class DocumentDetailsComponent implements OnInit {
  //initialize variables
  document: any = []; //stores the data for the single document
  bookmarks: any = []; //stores all bookmarks for the user
  public flag: boolean = false; //used to manupulate the bookmark icon
  id; //stores the document id
  faChevronLeft = faChevronLeft; //need to initialize back icon
  bookmarkData = {documentID: '', userID: '12345678',folderID: ''};
  
  constructor(
    private router: Router,
    public api: ApiService,
    private route: ActivatedRoute,
    private recentsService: BookmarksService,
    private _location: Location
  ) { this.id = this.route.snapshot.paramMap.get('id');}

  ngOnInit() {
    //all of the things in here get run when the page loads
    this.id = this.route.snapshot.paramMap.get('id'); //this gets the id from the URL
    this.getDocDetails();  //get the document data to display
    this.getBookmarks();  //check bookmarks to see if the icon should be filled in or not
  }

  //this adds a bookmark to the database
  addBookmark( userIDs: string, folderIDs: string) {
    this.bookmarkData = { documentID: this.id, userID: userIDs, folderID: folderIDs };
    this.api.addBookmark(this.id, userIDs, folderIDs).subscribe((result) => { });
  }

  //this gets the details of the specific document selected bt passing in its id
  getDocDetails() {
    var count = 0;
    this.api.getDocByID(this.id).subscribe((data: {}) => {
      this.document = data['recordsets'][0]; //if you put in a condole.log(data) youll see why we need to use [recordsets][0]
      if(this.recentsService.getRecents().length == 0){
        this.recentsService.addToRecents(this.document[0]);
      }else{
        //check if document is already in recents
        for (let index = 0; index < this.recentsService.getRecents().length; index++) {
          const element = this.recentsService.getRecents()[index];
          if(element.DOCUMENTID == this.route.snapshot.paramMap.get('id')){
            count++;
          }
        }
        //if the document is not already in recents then add
        if(count == 0){
          this.recentsService.addToRecents(this.document[0]);
        }
        count = 0;
      }
      return this.document;
    });
  }
  //this deletes a bookmark by its id
  deleteBookmark() {
    this.api.deleteBookmark(this.id)
      .subscribe(res => {
        this.getBookmarks();
      }, (err) => {
        console.log(err);
      });
  }
  //function for going back one page. Cant use router since you can get to this component from browse and bookmarks
  goBack() {
    this._location.back();
  }
  //use this for determining if the document was bookmarked and fill in the icon
  getBookmarks() {
    this.bookmarks = [];
    this.api.getBookmarks().subscribe((data: {}) => {
      this.bookmarks = data["recordsets"][0];
      //if this document has been bookmarked set the icon to be filled in
      for (let index = 0; index < this.bookmarks.length; index++) {
        const element = this.bookmarks[index];
        console.log(element);
        if (element.DOCUMENTID == this.id) {
          this.flag = true;
        }
      }
      return this.bookmarks;
    });

  }
}

