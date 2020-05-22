import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{BookmarksService} from '../../../bookmarks/bmk-accordion/bmk-service/bookmarks.service'
import {ApiService} from '../../../api-service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.scss']
})
export class DocumentDetailsComponent implements OnInit {
  document: any = [];
  id;
  bookmarkData = { documentID: '', 
    userID: '12345678', 
    folderID: '' };

  constructor(
    private router:Router,
    public api:ApiService,
    private route: ActivatedRoute,
    private bookmarksService: BookmarksService
    
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getDocDetails();
  }

  addBookmark(docIDs: string, userIDs: string, folderIDs: string) {
    this.bookmarkData = {documentID: docIDs, userID: userIDs, folderID: folderIDs };
    console.log(this.bookmarkData);
    this.api.addBookmark(docIDs, userIDs, folderIDs).subscribe((result) => { });
  }

  getDocDetails(){
    console.log(this.id);
    this.api.getDocByID(this.id).subscribe((data: {}) => {
      console.log(data);
      this.document = data['recordsets'][0]; // on data receive populate dataSource.data array
      console.log(this.document);
      return this.document;
   });

  // addToBookmarks(document) {
  //   window.alert('document was added to bookmarks');
  //   this.bookmarksService.addToBookmarks(document);
  }
  }

