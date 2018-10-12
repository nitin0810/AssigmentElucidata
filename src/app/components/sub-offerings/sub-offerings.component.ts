import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { SubOffering } from 'src/app/mock-data.model';

@Component({
  selector: 'app-sub-offerings',
  templateUrl: './sub-offerings.component.html',
  styleUrls: ['./sub-offerings.component.css']
})
export class SubOfferingsComponent implements OnInit, OnChanges {

  @Input() subOfferings: Array<SubOffering>;
  @Output() selectSuboffering: EventEmitter<number> = new EventEmitter(null);

  selected: number;

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    // this is called every time @Input subofferings is changed
    // Emit event to intialize singleOfferings list with list of first suboffering
    this.onSubOfferingClick(0);
  }

  onSubOfferingClick(index: number) {
    this.selected = index;
    this.selectSuboffering.emit(index);
  }

}
