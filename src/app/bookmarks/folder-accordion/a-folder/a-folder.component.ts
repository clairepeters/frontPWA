import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoldersService } from '../folders/folders.service'
import { ApiService } from '../../../api-service.service'
import { MatTableDataSource } from '@angular/material/table';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-a-folder',
  templateUrl: './a-folder.component.html',
  styleUrls: ['./a-folder.component.scss']
})
export class AFolderComponent implements OnInit {
  
  folders;
  displayedColumns: string[] = ['name', 'customColumn1'];

  constructor(
    private route: ActivatedRoute,
    private foldersService: FoldersService,
    public api: ApiService
  ) {
    this.getBookmarks();
  }

  id: number;
  folder: any = [];
  dataSource: MatTableDataSource<Document>;
  

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('ID');
    console.log(this.id)
    this.getFolderDetails();
    this.getBookmarks();
    this.dataSource = new MatTableDataSource(); // create new object
  }
  faChevronRight = faChevronRight;

  getFolderDetails() {
    this.api.getFolderByID(this.id).subscribe((data: {}) => {
      this.folder = data['recordset'][0]; //if you put in a condole.log(data) youll see why we need to use [recordsets][0]
      console.log(this.folder)
      return this.folder;
    });
  }

  getBookmarks() {
    this.api.getBookmarks().subscribe((data: {}) => {
      console.log(data);
      this.dataSource.data = data["recordsets"][0];
      return data;
    });
  }

  addFolder(){
    this.getBookmarks();
    console.log("addFolder")
  }
}
