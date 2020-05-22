

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DocumentsListComponent } from './browse/documents-list/documents-list.component';
import { DocumentDetailsComponent } from './browse/documents-list/document-details/document-details.component';
import { MoreDataComponent } from './more-data/more-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { ModalComponent } from './bookmarks/folder-accordion/folders/new-folder-modal/modal.component';
import { AFolderComponent } from './bookmarks/folder-accordion/a-folder/a-folder.component';
import { SearchComponent } from './bookmarks/search/search.component';
import { RecentsComponent } from './bookmarks/recents/recents.component';
import { BmkAccordionComponent } from './bookmarks/bmk-accordion/bmk-accordion.component';
import { FolderAccordionComponent } from './bookmarks/folder-accordion/folder-accordion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot([
      { path: 'Bookmark', component: BookmarksComponent },
      { path: 'DOC_DATA/:id', component: DocumentDetailsComponent },
      { path: 'folder/:ID', component: AFolderComponent },
      { path: 'Documents', component: DocumentsListComponent },
      { path: 'more-data', component: MoreDataComponent },
      { path: '', redirectTo: '/Bookmark', pathMatch: 'full'
  }

    ]),
    HttpClientModule,
    
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule
  ],
  declarations: [
    AppComponent,
    BookmarksComponent,
    TopbarComponent,
    DocumentsListComponent,
    DocumentDetailsComponent,
    MoreDataComponent,
    ModalComponent,
    AFolderComponent,
    SearchComponent,
    RecentsComponent,
    BmkAccordionComponent,
    FolderAccordionComponent,
  ],
  entryComponents: [ModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
