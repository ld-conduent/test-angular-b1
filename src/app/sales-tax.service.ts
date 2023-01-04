import { Injectable } from '@angular/core';

import { TaxRateService } from './tax-rate.service';

@Injectable()
export class SalesTaxService {
  constructor(private rateService: TaxRateService) {}

  getVAT(value: string | number, included: boolean = false) {
    const amount = typeof value === 'string' ? parseFloat(value) : value;
    var mount: number = 0;

    if (included) {
      mount = (amount || 0) / (1 + this.rateService.getRate('VAT-GT'));
    } else {
      mount = (amount || 0) * this.rateService.getRate('VAT-GT');
    }

    return mount;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
