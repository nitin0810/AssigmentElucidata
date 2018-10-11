import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { offerings } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  getOfferings() {
    // mock that data is coming from an API endpoint 
    // by returning and observable
    return of(offerings);
  }
}
