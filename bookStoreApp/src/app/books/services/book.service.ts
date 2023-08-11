import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';


@Injectable({
  "providedIn": "root"
})
export class BookService {

  constructor() { }

  public getBoosk(): any[] {
    return [
      {
        "id": 1,
        "title": "Angular fundamentals",
        "totalpages": 100,
        "author": "Waqar",
        "price": {
          "currency": "PKR",
          "value": 199
        }
      },
      {
        "id": 2,
        "title": "Java fundamentals",
        "totalpages": 200,
        "author": "Muqeet",
        "price": {
          "currency": "PKR",
          "value": 299
        }
      },
      {
        "id": 3,
        "title": "Python fundamentals",
        "totalpages": 300,
        "author": "Zeee",
        "price": {
          "currency": "PKR",
          "value": 399
        }
      },
      {
        "id": 4,
        "title": "C# fundamentals",
        "totalpages": 400,
        "author": "Zeee",
        "price": {
          "currency": "PKR",
          "value": 499
        }
      },
      {
        "id": 5,
        "title": "Machine learning fundamentals",
        "totalpages": 500,
        "author": "Qav",
        "price": {
          "currency": "PKR",
          "value": 599
        }
      },
      {
        "id": 1,
        "title": "Angular fundamentals",
        "totalpages": 100,
        "author": "Waqar",
        "price": {
          "currency": "PKR",
          "value": 199
        }
      },
      {
        "id": 2,
        "title": "Java fundamentals",
        "totalpages": 200,
        "author": "Muqeet",
        "price": {
          "currency": "PKR",
          "value": 299
        }
      },
      {
        "id": 3,
        "title": "Python fundamentals",
        "totalpages": 300,
        "author": "Zeee",
        "price": {
          "currency": "PKR",
          "value": 399
        }
      },
      {
        "id": 4,
        "title": "C# fundamentals",
        "totalpages": 400,
        "author": "Zeee",
        "price": {
          "currency": "PKR",
          "value": 499
        }
      },
      {
        "id": 5,
        "title": "Machine learning fundamentals",
        "totalpages": 500,
        "author": "Qav",
        "price": {
          "currency": "PKR",
          "value": 599
        }
      },

    ];
  }

  public recentBoosk(): any[] {
    return [
      {
        "id": 1,
        "title": "Angular fundamentals",
        "totalpages": 100,
        "author": "Waqar",
        "price": {
          "currency": "PKR",
          "value": 199
        }
      },
      {
        "id": 2,
        "title": "Java fundamentals",
        "totalpages": 200,
        "author": "Muqeet",
        "price": {
          "currency": "PKR",
          "value": 299
        }
      },

    ];
  }
}
