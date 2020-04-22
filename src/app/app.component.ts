import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa';

  links: any[] =[
    {
      "path": "bookmarks",
      "label": "Bookmarks"
    },
    {
      "path": "documents-list",
      "label": "Browse"
    }
  ]
}
