import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  public Id: String = "";
  public autherid: String = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.route);
    this.route.params.subscribe((x) => {
      console.log(x)
      this.Id = x['id'];
      this.autherid = x['authorid'];
      //this.autherid = param[0].autherid;
    });
  }

}
