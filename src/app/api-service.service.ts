import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
//this imported the Documant export for the old hard coded data
// import { Document } from './browse/documents';

const endpoint = 'http://localhost:8081/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8081/Bookmark'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getDOCUMENT(id): Observable<any> {
    return this.http.get(endpoint + 'Bookmark/' + id).pipe(
      map(this.extractData));
  }
  getBookmarks(): Observable<any> {
    return this.http.get(endpoint + 'Bookmark').pipe(
      map(this.extractData));
  }
  getFolders(): Observable<any> {
    return this.http.get(endpoint + 'folders').pipe(
      map(this.extractData));
  }

  getDocuments(): Observable<any> {
    return this.http.get(endpoint + 'Documents').pipe(
      map(this.extractData));
  }
//I use this one. I am not sure what the difference is but seems fo be formatted better
  getDocuments2(): Observable<any> {
    return this.http.get(endpoint + 'Documents').pipe(
      map((data: Document[]) => {
        return data;
      }), catchError(this.handleError<any>('Getdocuments2'))
   )
  }
//   /DocumentByID /:id
// getDocByID(id){
//   return this.http.get(endpoint + 'Documents/:' +id).pipe(
//     map( this.extractData))
    
// };
public getDocByID(id: String){
  return this.http.get(endpoint + `Documents/${id}`);
}
public getFolderByID(id: number){
  return this.http.get(endpoint + `folders/${id}`);
}

  addBookmark (docIDs, userIDs, folderIDs): Observable<any> {
    console.log(docIDs, userIDs, folderIDs);
    console.log("stringify: " + JSON.stringify(docIDs + " " + userIDs + folderIDs))
    return this.http.post<any>(endpoint + 'Bookmark/' + docIDs, httpOptions )
    .pipe(tap((product) => console.log('added bookmark')), catchError(this.handleError<any>('addProduct')));
  }
  
  deleteBookmark (DOCUMENTID): Observable<any>{
    console.log(DOCUMENTID);
    return this.http.delete<any>(endpoint + 'Bookmark/' + DOCUMENTID, httpOptions ).pipe(
      tap(_=> console.log('deleted bookmark')),
      catchError(this.handleError<any>('deleteBookmark'))
    )
  }

  addFolder (folderIDs, folderName): Observable<any> {
    console.log("stringify: " + JSON.stringify(folderIDs + " " + folderName))
    return this.http.post<any>(endpoint + 'folders/' + folderIDs + "/" + folderName, httpOptions )
    .pipe(tap((product) => console.log('added folder')), catchError(this.handleError<any>('addProduct')));
  }
  deleteFolder (folderIDs): Observable<any>{
    console.log(folderIDs);
    return this.http.delete<any>(endpoint + 'folders/' + folderIDs, httpOptions ).pipe(
      tap(_=> console.log('deleted folder')),
      catchError(this.handleError<any>('deleteBookmark'))
    )
  }

  

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}


}
