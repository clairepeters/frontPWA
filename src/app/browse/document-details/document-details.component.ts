import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import{DOC_DATA} from '../documents';
import{BookmarksService} from '../../bookmarks/bmk-accordion/bmk-service/bookmarks.service'


@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.scss']
})
export class DocumentDetailsComponent implements OnInit {
  document;
  constructor(
    private route: ActivatedRoute,
    private bookmarksService: BookmarksService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.document = DOC_DATA[+params.get('id')];
    });
  }
  addToBookmarks(document) {
    window.alert('document was added to bookmarks');
    this.bookmarksService.addToBookmarks(document);
  }

}
