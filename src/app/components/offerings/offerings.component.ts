import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Offering } from 'src/app/mock-data.model';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.css']
})
export class OfferingsComponent implements OnInit, OnChanges {

  @Input() offerings: Array<Offering>;
  @Output() selectOffering: EventEmitter<number> = new EventEmitter(null);

  // stores the index of selected offering, used for styling
  selected: number;

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {

    // this lifecycle is executed only once at app starting since @Input() offerings is intialized by main component
    // and then does not change
    // Emit event to initialize the subofferings list with the subofferings of first offering
    this.onOfferingClick(0);
  }

  onOfferingClick(index: number) {
    this.selected = index;
    this.selectOffering.emit(index);
  }
}
