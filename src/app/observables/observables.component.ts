import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  cntr = 1;
  constructor() { }

  ngOnInit() {
    Observable.interval(1500).subscribe(
      ev => this.cntr += 1,
      err => console.log(err),
      () => console.log(`Completed`)
    );
  }
}
