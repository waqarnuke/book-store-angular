import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = ""
  email: string = "";
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(query => {
      console.log(query);
      this.username = query["name"];
      this.email = query["email"];
    })
  }

  goToSignup(): void {
    this.router.navigate(['/auth/signup']);
  }

  goToBookDetail(id: number, authorId: number): void {
    this.router.navigate(['/public/book-details', id, 'author', authorId],
      { queryParams: { name: 'waqar', email: 'sample@mail.com' } });
  }
}
