import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class WebDataService {

  constructor(
    private http: HttpClient
  ) { }

  getData(zipCode): Observable<ArrayBuffer> {
    return this.http.get(`https://digital-shelter-153912.firebaseio.com/morning.json`).catch(this.errHndlr);
  }

  postData() {
    return this.http.post('https://digital-shelter-153912.firebaseio.com/morning.json', {
      nm: 'android',
      cty: 'pune'
    });
  }

  errHndlr(err) {
    return Observable.throw('Error in Http');
  }
}
