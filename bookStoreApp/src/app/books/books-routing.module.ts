import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBookComponent } from './components/all-book/all-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';

// import { BookDetailsComponent } from './components/book-details/book-details.component';
// import { AllBookComponent } from './components/all-book/all-book.component';
// import { BooksComponent } from './books.component';

const routes: Routes = [
  { path: '', component: AllBookComponent },
  { path: 'recent', component: RecentBooksComponent },
  { path: ':id', component: BookDetailsComponent }
  //{ path: 'book-details/:id', component: BookDetailsComponent }
  //{ path: 'book-details/:id/author/:authorid', component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
