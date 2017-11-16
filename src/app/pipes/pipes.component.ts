import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  dt = new Date();
  tech = 'Android';
  cost = 200;
  nm = '';

  names = [
    'Android', 'Apple', 'HTC', 'Windows', 'Black Berry', 'Moto', 'OnePlus5'
  ];

  constructor() { }

  ngOnInit() {
  }

  addIt(nwNm: string) {
    this.names.push(nwNm);
  }
}
