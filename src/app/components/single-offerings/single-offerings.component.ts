import { Component, OnInit, Input } from '@angular/core';
import { OfferingSingle } from 'src/app/mock-data.model';

@Component({
  selector: 'app-single-offerings',
  templateUrl: './single-offerings.component.html',
  styleUrls: ['./single-offerings.component.css']
})
export class SingleOfferingsComponent implements OnInit {

  @Input() singleOfferings: { description: string, list: OfferingSingle[] };

  constructor() { }

  ngOnInit() {
  }

}
