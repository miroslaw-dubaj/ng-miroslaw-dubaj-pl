import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContactsComponent } from './contacts/contacts.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentLang = 'en';

  cards = [
    {
      companyName: 'PGS Software S.A.',
      companyLogoClass: 'card__header-image card__header-image--pgs',
      jobTitle: 'SoftwareDeveloper'
    },
    {
      companyName: 'Primetals Technologies Poland Sp. z o.o.',
      companyLogoClass: 'card__header-image card__header-image--pmt',
      jobTitle: 'SoftwareDeveloper'
    },
    {
      companyName: 'SDA sp. z o.o.',
      companyLogoClass: 'card__header-image card__header-image--sda',
      jobTitle: 'Programming Trainer'
    },
    {
      companyName: 'Darlan GmbH & Co. KG',
      companyLogoClass: 'card__header-image card__header-image--darlan',
      jobTitle: 'SoftwareDeveloper'
    },
    {
      companyName: 'QUPI Inc.',
      companyLogoClass: 'card__header-image card__header-image--qupi',
      jobTitle: 'SoftwareDeveloper'
    },
    {
      companyName: 'I-BS.pl Sp. z o.o.',
      companyLogoClass: 'card__header-image card__header-image--ibs',
      jobTitle: 'SoftwareDeveloper'
    },
    {
      companyName: 'Cyfrowa Foto Sp. z o.o.',
      companyLogoClass: 'card__header-image card__header-image--cyfrowa',
      jobTitle: 'SoftwareDeveloper'
    },
  ]

  constructor(
    private _bottomSheet: MatBottomSheet,
    private translate: TranslateService
  ) {
    translate.use(this.currentLang);
  }

  openBottomSheet(): void {
    this._bottomSheet.open(ContactsComponent);
  }

  toggleCurrentLang() {
    this.currentLang = this.currentLang === 'en' ? 'pl' : 'en';
    this.translate.use(this.currentLang);
  }


}
