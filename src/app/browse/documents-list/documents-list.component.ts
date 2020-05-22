import { Component } from '@angular/core';
//this was to import the hard coded data but im using an api now
// import{ DOC_DATA, Document} from '../documents'
import { MatTableDataSource } from '@angular/material/table';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit, Input } from '@angular/core';
import { ApiService } from '../../api-service.service'
@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.scss']
})
//start api integration code
export class DocumentsListComponent implements OnInit {
  dataSource: MatTableDataSource<Document>;
  displayedColumns: string[] = ['name', 'customColumn1'];
  documents: any = [];

  constructor(public api: ApiService, private route: ActivatedRoute, private router: Router) { }

  @Input() bookmarkData = { documentID: '', userID: '12345678', folderID: 'NULL' }

  ngOnInit() {
    // this.getDocuments();
    this.dataSource = new MatTableDataSource(); // create new object
    this.getLaps(); // forgeted this line
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  share() {
    window.alert('The document has been shared!');
  }

  // getDocuments() {
  //   this.documents = [];
  //   this.api.getDocuments().subscribe((data: {}) => {
  //     console.log(data);
  //     this.documents = data["recordsets"][0];
  //     console.log(this.documents)

  //   });
  // }

  // addBookmark() {
  //   this.api.addBookmark(this.bookmarkData).subscribe((result) => { })
  // }
  //end api integration code
  //start original front end code
  // documents = Document;
  faChevronRight = faChevronRight;
  // columnsToDisplay = documents;


  getLaps() {
    this.api.getDocuments2().subscribe((data: {}) => {
      console.log(data);
      console.log('Laps');
      this.dataSource.data = data['recordsets'][0]; // on data receive populate dataSource.data array
      console.log(this.dataSource.data);
      return data;
    });

    //  displayedColumns: string[] = ['name', 'customColumn1'];
    // dataSource = new MatTableDataSource(DOC_DATA);
    // this.dataSource = new MatTableDataSource(this.getLaps());



  }
}
