import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubOfferingsComponent } from './sub-offerings.component';

describe('SubOfferingsComponent', () => {
  let component: SubOfferingsComponent;
  let fixture: ComponentFixture<SubOfferingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubOfferingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
