import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  userId: string = "";
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    //console.log(this.route);
    this.route.parent?.params.subscribe((x) => {
      console.log(x);
      this.userId = x['userId'];
    });
  }
}
