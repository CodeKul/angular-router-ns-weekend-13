import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class WebDataService {

  constructor(
    private http: HttpClient
  ) { }

  getData(zipCode): Observable<ArrayBuffer> {
    return this.http.get(`http://api.postcodes.io/postcodes/${zipCode}`).catch(this.errHndlr);
  }

  postData() {
    return this.http.post('http://localhost:9669/postDt', {
      nm: 'android',
      cty: 'pune'
    });
  }

  errHndlr(err) {
    return Observable.throw('Error in Http');
  }
}
