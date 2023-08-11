import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { AllBookComponent } from './components/all-book/all-book.component';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
// import { BookDetailsComponent } from './components/book-details/book-details.component';
// import { AllBookComponent } from './components/all-book/all-book.component';
// import { BooksComponent } from './books.component';
// import { BooksRoutingModule } from './books-routing.module';
import { RouterModule } from '@angular/router';
import { BookService } from './services/book.service';
import { SharedModule } from '../shared/shared.module';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { BookCardComponent } from './components/book-card/book-card.component';





@NgModule({
  declarations: [
    BookDetailsComponent,
    AllBookComponent,
    BooksComponent,
    RecentBooksComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BooksRoutingModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class BooksModule { }
