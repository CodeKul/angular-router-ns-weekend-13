import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../background.service';

@Component({
  selector: 'app-caurosel',
  templateUrl: './caurosel.component.html',
  styleUrls: ['./caurosel.component.css']
})
export class CauroselComponent implements OnInit {

  dt: string;
  private nm: string;
  constructor(
    private back: BackgroundService,
    private router: Router,
    private actRt: ActivatedRoute
  ) { }

  ngOnInit() {
    this.back.subscribeDate(dtEm => this.dt = dtEm.dt);
    this.nm = this.actRt.snapshot.params['usNm'];
    this.actRt.paramMap.subscribe(
      map => this.nm = map.get('usNm')
    );

    this.actRt.root.queryParams.subscribe(
      params => this.nm += `page ${params['page']}`
    );
  }

  changeData(usNm) {
    this.router.navigate(['dash', usNm]);
  }
}
