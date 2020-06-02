import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../bmk-accordion/recent-service/recent.service'
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
import {ApiService} from '../../api-service.service';

@Component({
  selector: 'app-folder-accordion',
  templateUrl: './folder-accordion.component.html',
  styleUrls: ['./folder-accordion.component.scss']
})

export class FolderAccordionComponent implements OnInit {

  public flag: boolean = true; //this is for the remove folder edit/clear icon
  "folder": {
    "FOLDERID": string,
    "FOLDERNAME": string,
    "USERID": number
  }
  folders: any = [];
  isEditing = false;
  btnCounter = 1;
  private folderDB = new NgxIndexedDB('folders', 1);

  constructor(
    private route: ActivatedRoute,
    private bookmarksService: BookmarksService,
    private foldersService: FoldersService,
    public dialog: MatDialog, //this is used for the "new folder pop-up"
    public api: ApiService
  ) {
    
    
  } //end constructor

  edit() {
    this.btnCounter++;
    if (this.btnCounter % 2 == 0) {
      this.isEditing = true;
    } else {
      this.isEditing = false;
    }
  }

  generateID() {
    var id = Math.floor(Math.random() * 6000) + 2  

    return id
  }

deleteFolder(folderID){
  console.log(folderID)
  this.api.deleteFolder(folderID)
        .subscribe(res => {
          this.getFolders();
        }, (err) => {
          console.log(err);
        });
        this.getFolders();
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
      // this.folder = { FOLDERID: this.generateID(), FOLDERNAME: result, USERID: 12345678 }
      this.api.addFolder(this.generateID(), result).subscribe((result) => {this.getFolders() });
      
    });
  } //end export class

  ngOnInit() {
    this.getFolders();
  }

  getFolders() {
    this.folders = [];
      this.api.getFolders().subscribe((data: {}) => {
        console.log(data);
        this.folders = data["recordset"];
        console.log(this.folders)
        return this.folders;
      });
  }









}
