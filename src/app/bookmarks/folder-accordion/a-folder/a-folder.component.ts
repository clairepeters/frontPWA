import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{FoldersService} from '../folders/folders.service'



@Component({
  selector: 'app-a-folder',
  templateUrl: './a-folder.component.html',
  styleUrls: ['./a-folder.component.scss']
})
export class AFolderComponent implements OnInit {
folder;
folders;
  constructor(
    private route: ActivatedRoute,
    private foldersService: FoldersService
  ) {
    this.folders = this.foldersService.getFolders();
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      for(var i = 0; i < this.folders.length; i++){
        if(this.folders[i].ID == params.get("ID") ){
          this.folder = this.folders[i]
        }

      }
     
    });
  }

}
