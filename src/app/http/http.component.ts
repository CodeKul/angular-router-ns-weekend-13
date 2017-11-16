import { Component, OnInit } from '@angular/core';
import { WebDataService } from './web-data.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  msg = '';
  country = '';
  lat = '';
  lng = '';
  consti = '';

  constructor(
    private dataHttp: WebDataService
  ) { }

  ngOnInit() {
  }

  showGet(zip: string) {
    // this.dataHttp.getData(zip).subscribe(
    //   res => {
    //     this.consti = res['result']['parliamentary_constituency'];
    //     this.country = res['result']['country'];
    //     this.lat = res['result']['latitude'];
    //     this.lng = res['result']['longitude'];
    //   }
    // );

    this.dataHttp.postData().subscribe();
  }

}
