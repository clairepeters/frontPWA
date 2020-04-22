import { Component, Inject } from '@angular/core';
// import { BookmarksService } from './bmk-service/bookmarks.service'
// import { FoldersService } from './folders/folders.service'
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { DialogData } from "./folders/new-folder-modal/DialogData";
// import { ModalComponent } from './folders/new-folder-modal/modal.component';
// import { generate } from 'rxjs';
// import {SearchComponent} from './search/search.component'
// import { ActivatedRoute } from '@angular/router';
// import{RecentsComponent} from './recents/recents.component'

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent {

  constructor(
   
  ) {} 

   
}







// export class BookmarksComponent {

 


//   "folder": {
//     "name": string,
//     "ID": string,
//     "products": [],


//   }
//   folders;
  
//   items;


//   constructor(
//     private route: ActivatedRoute,
//     private bookmarksService: BookmarksService,
//     private foldersService: FoldersService,
//     public dialog: MatDialog
//   ) {
  
//     this.items = this.bookmarksService.getBookmarks();
   
//     this.folders = this.foldersService.getFolders();
//   } 


//   generateID() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   }

//   openDialog(): void {
  
//     document.getElementById("btn").blur();
  
//     const dialogRef = this.dialog.open(ModalComponent, {
//       width: '250px',
//       data: { folder: this.folder }
//     });
  
//     dialogRef.afterClosed().subscribe(result => {
//       if (result == null) {
//         return;
//       }
//       console.log(this.folders);
//       this.folder = { name: result, ID: this.generateID(), products: [] }


     

//       this.foldersService.addFolder(this.folder)

//     });
//   } 
// }
