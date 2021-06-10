import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Twoway2Component } from './twoway2.component';

describe('Twoway2Component', () => {
  let component: Twoway2Component;
  let fixture: ComponentFixture<Twoway2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Twoway2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Twoway2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
