import { Component, OnInit, Input } from '@angular/core';
import { OfferingSingle } from 'src/app/mock-data.model';

@Component({
  selector: 'app-single-offering',
  templateUrl: './single-offering.component.html',
  styleUrls: ['./single-offering.component.css']
})
export class SingleOfferingComponent implements OnInit {

  @Input() singleOffering:OfferingSingle;
  @Input() number:number;

  constructor() { }

  ngOnInit() {
  }

}
