import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegDataDrivenComponent } from './reg-data-driven.component';

describe('RegDataDrivenComponent', () => {
  let component: RegDataDrivenComponent;
  let fixture: ComponentFixture<RegDataDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegDataDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegDataDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
