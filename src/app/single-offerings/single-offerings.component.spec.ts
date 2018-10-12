import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOfferingsComponent } from './single-offerings.component';

describe('SingleOfferingsComponent', () => {
  let component: SingleOfferingsComponent;
  let fixture: ComponentFixture<SingleOfferingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleOfferingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
