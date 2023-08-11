import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.scss']
})
export class AllBookComponent implements OnInit {

  public books: BookModel[] = [];

  constructor(public bookservice: BookService,
    public _counterService: CounterService) {
  }

  ngOnInit(): void {
    //this.books = this.bookservice.getBoosk();
    const allbooks = this.bookservice.getBoosk();
    allbooks.forEach(b => {
      var obj = new BookModel();
      obj.id = b.id;
      obj.author = b.author;
      obj.title = b.title;
      obj.price = b.price;
      obj.totalpages = b.totalpages;
      this.books.push(obj);
    });
    console.log(this.books);
  }

  public increase(): void {
    this._counterService.incCounter();
  }
  public decrease(): void {
    this._counterService.decCounter();
  }

}
