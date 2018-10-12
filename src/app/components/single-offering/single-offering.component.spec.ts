import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOfferingComponent } from './single-offering.component';

describe('SingleOfferingComponent', () => {
  let component: SingleOfferingComponent;
  let fixture: ComponentFixture<SingleOfferingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleOfferingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
