import { Injectable } from '@angular/core';

@Injectable()
export class TaxRateService {
  getRate(rateName: string) {
    switch (rateName) {
      case 'VAT-TN':
        return 0.0975;
      case 'VAT-FL':
        return 0.075;
      case 'VAT-OR':
        return 0;
      case 'VAT-GT':
        return 0.12;
      default:
        return 0.1;
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
