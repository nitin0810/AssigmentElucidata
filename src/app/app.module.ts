import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { OfferingsComponent } from './components/offerings/offerings.component';
import { SubOfferingsComponent } from './components/sub-offerings/sub-offerings.component';
import { SingleOfferingComponent } from './components/single-offering/single-offering.component';
import { SingleOfferingsComponent } from './components/single-offerings/single-offerings.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    OfferingsComponent,
    SubOfferingsComponent,
    SingleOfferingComponent,
    SingleOfferingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
