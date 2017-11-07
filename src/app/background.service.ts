import { ForegroundService } from './foreground.service';

import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class BackgroundService {

  someDate: string;
  private em: EventEmitter<any>;

  constructor(
    private fo: ForegroundService
  ) {
    this.someDate = '' + Math.random();
    this.em = new EventEmitter();
  }

  emitDate() {
    this.em.emit({
      dt: this.someDate,
      nm: 'android'
    });
  }

  subscribeDate(callback: any) {
    this.em.subscribe(dt => callback(dt));
  }
}
