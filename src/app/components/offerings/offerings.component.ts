import { Component, OnInit } from '@angular/core';

import { Offering } from 'src/app/mock-data.model';
import { MockDataService } from 'src/app/mock-data.service';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.css']
})
export class OfferingsComponent implements OnInit {

  offerings: Array<Offering>;

  constructor(
    private mockDataService: MockDataService
  ) { }

  ngOnInit() {
    this.fetchOfferings();
  }

  fetchOfferings() {

    this.mockDataService.getOfferings()
      .subscribe((res: Offering[]) => {
        this.offerings = res;
      }, (err: any) => {
        console.log(err);
      });
  }

}
