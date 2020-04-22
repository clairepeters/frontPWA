import { Component} from '@angular/core';
import { BookmarksService } from '../bookmarks/bmk-accordion/bmk-service/bookmarks.service';

@Component({
  selector: 'app-more-data',
  templateUrl: './more-data.component.html',
  styleUrls: ['./more-data.component.scss']
})
export class MoreDataComponent{
  itemData;

  constructor(
    private bookmarksService: BookmarksService
  ) {
    this.itemData = this.bookmarksService.getMoreData();
  }
  

}
