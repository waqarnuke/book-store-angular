import { Component, Inject, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _counterService: CounterService, @Inject('token') public title: string) { }

  ngOnInit(): void {

  }

  public increase(): void {
    this._counterService.incCounter();
  }
  public decrease(): void {
    this._counterService.decCounter();
  }

  public childData($event: any): void {
    console.log($event);
  }
}
