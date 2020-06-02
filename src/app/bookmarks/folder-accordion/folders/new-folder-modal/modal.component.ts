import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FoldersService } from '../folders.service'
import{DialogData} from './DialogData'
// export interface DialogData {
//   animal: string;
//   name: string;
// }
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  name

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {

  }



  check(name) {
    if (name == null) {
      alert("null")

    } else if (name.replace(/\s+/g, '').length == 0) {
      alert("please enter a valid name")
    } else {
      this.dialogRef.close(name);
    }
  }

}