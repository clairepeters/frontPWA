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
      "path": "Bookmark",
      "label": "Bookmarks"
    },
    {
      "path": "Documents",
      "label": "Browse"
    }
  ]
}
