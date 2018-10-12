import { Component, OnInit } from '@angular/core';
import { Offering, SubOffering, OfferingSingle } from 'src/app/mock-data.model';
import { MockDataService } from 'src/app/mock-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // stores offerings data recieved from service 
  offerings: Array<Offering>;
  selectedOffering: Offering;

  // stores subOfferings list of selected offering to bind with SubOfferingsComponent
  subOfferings: Array<SubOffering>;
  selectedSubOffering: SubOffering;

  // stores the list of single offerings(lowest level entity) of selected suboffering to bind with SingleOfferingsComponent
  singleOfferingsData: { description: string, list: OfferingSingle[] };


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

  // handler for output event of OfferingsConmponent
  onOfferingSelect(index: number) {

    this.selectedOffering = this.offerings[index];
    this.subOfferings = this.selectedOffering.subOfferings;
  }

  // handler for output event of SubOfferingsConmponent
  onSubOfferingSelect(index: number) {

    this.selectedSubOffering = this.subOfferings[index];
    this.singleOfferingsData = { description: this.selectedSubOffering.description, list: this.selectedSubOffering.list };
  }

}
