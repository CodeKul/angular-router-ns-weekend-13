import { Component, OnInit } from '@angular/core';
import {
  AsyncValidatorFn,
  ValidatorFn,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormArray,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-reg-data-driven',
  templateUrl: './reg-data-driven.component.html',
  styleUrls: ['./reg-data-driven.component.css']
})
export class RegDataDrivenComponent implements OnInit {

  private fg: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.fg = fb.group({
      usNm: ['', Validators.required],
      eml: ['', Validators.compose([
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:quotemark
        Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]), this.asyncFn],
      pass: ['', Validators.compose([Validators.required, this.valiFn, this.valiFn8])],
      arr: fb.array([
        fb.control(''), fb.control('')
      ])
    });
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  valiFn: ValidatorFn = (cntrl: AbstractControl): ValidationErrors | null => {
    if (cntrl.value.charAt(0) === 'a') {
      return null;
    }
    return { ers: 'Password start from a' };
  }

  valiFn8: ValidatorFn = (cntrl: AbstractControl): ValidationErrors | null => {
    if (cntrl.value.length >= 8) {
      return null;
    }
    return { len: 'Length should be 8' };
  }

  asyncFn: AsyncValidatorFn = (cntrl: AbstractControl): Promise<ValidationErrors | null> => {
    return new Promise((res, rej) => {
      setTimeout(() => res(null), 1500);
    });
  }

  onSubmit() {
    console.log(this.fg);
  }

  addCntrls() {
    (this.fg.controls.arr as FormArray).push(new FormControl(''));
  }

  delCntrl() {

  }
}
