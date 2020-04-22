import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../bmk-accordion/bmk-service/bookmarks.service'
import { FoldersService } from './folders/folders.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, fadeInItems } from '@angular/material';
import { DialogData } from "./folders/new-folder-modal/DialogData";
import { ModalComponent } from './folders/new-folder-modal/modal.component';
import { generate } from 'rxjs';
import { SearchComponent } from '../search/search.component'
import { ActivatedRoute } from '@angular/router';
import { RecentsComponent } from '../recents/recents.component'
import { v4 as uuid } from 'uuid';
import { NgxIndexedDB } from 'ngx-indexed-db';
import { error } from 'util';
@Component({
  selector: 'app-folder-accordion',
  templateUrl: './folder-accordion.component.html',
  styleUrls: ['./folder-accordion.component.scss']
})

export class FolderAccordionComponent implements OnInit {

  //Data for folder modal



  "folder": {
    "name": string,
    "ID": string,
    "products": [],
  }
  folders;
  //Array of bookmarked items from bookmarks service
  items;
  isEditing = false;
  btnCounter = 1;
  private folderDB = new NgxIndexedDB('folders', 1);

  constructor(
    private route: ActivatedRoute,
    private bookmarksService: BookmarksService,
    private foldersService: FoldersService,
    public dialog: MatDialog, //this is used for the "new folder pop-up"
  ) {
    //set items to the array that the service allows us to grab
    this.items = this.bookmarksService.getBookmarks();
    //set folders to the array that the service allows us to grab
    this.folders = this.foldersService.getFolders();
  } //end constructor

  edit() {
    this.btnCounter++;
    if (this.btnCounter % 2 == 0) {
      this.isEditing = true;
    } else {
      this.isEditing = false;
    }
  }

  delete(clicked_id) {
    var numFolders = this.folders.length;
    var folders = this.folders;
    var theFolder;
    for (var i = 0; i < numFolders; i++) {
      if (folders[i].ID === clicked_id) {
        theFolder = i;
        i++;
      }
    }
    folders.splice(theFolder, 1);
    this.foldersService.setFolders(folders);
    this.folders = this.foldersService.getFolders();

  }
  generateID() {
    var id = uuid()
    return id
  }


  openDialog(): void {
    //gets rid of the focus on add folder button
    document.getElementById("btn").blur();
    //specs for dialog
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { folder: this.folder }
    });
    // this is what happens when closing the dialog box
    dialogRef.afterClosed().subscribe(result => {
      if (result == null) {
        return;
      }
      console.log(this.folders);
      this.folder = { name: result, ID: this.generateID(), products: [] }


      //requirements for folder 
      this.foldersService.addFolder(this.folder)
      var folder = this.folder
      let fdb = new NgxIndexedDB('idxDB', 1);
      fdb.openDatabase(1, evt => {
        let objectStore = evt.currentTarget.result.createObjectStore('folders', { keyPath: 'id', autoIncrement: true });

        objectStore.createIndex('name', 'name', { unique: false });
        objectStore.createIndex('UUID', 'UUID', { unique: true });
        objectStore.createIndex('products', 'products', { unique: false });

      }).then(function () {
        fdb.add('folders', { name: folder.name, UUID: folder.ID, products: folder.products }).then(
          () => {
            // Do something after the value was added
            
          },
          error => {
            console.log(error);
          }
        );
      });
    });
  } //end export class

  ngOnInit() {

    let fdb = new NgxIndexedDB('idxDB', 1);
    fdb.openDatabase(1, evt => {
        let objectStore = evt.currentTarget.result.createObjectStore('folders', { keyPath: 'id', autoIncrement: true });

        objectStore.createIndex('name', 'name', { unique: false });
        objectStore.createIndex('UUID', 'UUID', { unique: true });
        objectStore.createIndex('products', 'products', { unique: false });

      }).then(function () {
        fdb.getByKey('folders', 1).then(
          folder => {
            console.log(folder)
          },
          error => {
            console.log(error)
          }
        );
      });
   

  }











}
