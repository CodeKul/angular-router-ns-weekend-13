import { BackgroundService } from './../background.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  dt: string;
  constructor(
    private back: BackgroundService
  ) { }

  ngOnInit() {
    this.dt = this.back.someDate;
  }

  onDt() {
    this.back.someDate = new Date().toString();
    this.dt = this.back.someDate;

    this.back.emitDate();
  }
}
