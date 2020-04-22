import { Component} from '@angular/core';
import{ DOC_DATA} from '../documents'
import {MatTableDataSource} from '@angular/material/table';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.scss']
})
export class DocumentsListComponent  {
  documents = Document;
  faChevronRight = faChevronRight;
  // columnsToDisplay = documents;

   displayedColumns: string[] = ['name', 'customColumn1'];
  dataSource = new MatTableDataSource(DOC_DATA);
  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  share() {
    window.alert('The document has been shared!');
  }

}
