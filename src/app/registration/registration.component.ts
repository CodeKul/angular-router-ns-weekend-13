import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  frmDt = {
    usNm: '',
    eml: '',
    pass: ''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(frm: NgForm) {
    console.log(frm);
  }
}
