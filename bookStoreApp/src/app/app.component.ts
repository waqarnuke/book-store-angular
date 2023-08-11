import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //templateUrl: './app.componentSideNav.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  email: string = "sample@mail.com";
  title = 'bookStoreApp';
  showFiller = false;
}
