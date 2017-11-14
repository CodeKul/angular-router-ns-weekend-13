import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {

  cntr = 1;
  wsCh: any;

  subInt: Subscription;
  subMy: Subscription;

  constructor() {
    this.wsCh = {};
  }
  ngOnInit() {
    this.subInt = Observable.interval(1500)
      // .catch(this.errHndlr)
      .subscribe(
      ev => this.cntr += 1,
      err => console.log(err),
      () => console.log(`Completed`)
      );

    this.subMy = this.myObservable()
      // .catch(this.errHndlr)
      .subscribe();
  }

  errHndlr(err: any) {
    return Observable.throw({});
  }
  myObservable(): Observable<any> {
    return Observable.create(sub => {
      // here notification will arrive, by using websockets

      for (let i = 0; i < 10; i++) {

        if (i > 10) { //any condition
          sub.error({});
          Observable.throw({ msg: 'Bad Condition' });
        }
        sub.next('new unread mail');
      }
      sub.complete();
    });
  }

  ngOnDestroy(): void {
    this.subInt.unsubscribe();
    this.subMy.unsubscribe();
  }
}
