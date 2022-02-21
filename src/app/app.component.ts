import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContactsComponent } from './contacts/contacts.component';
import { TranslateService } from '@ngx-translate/core';
import { SvgIconsRegistryService } from './svg-icons-registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentLang = 'en';

  cards = [
    {
      date: 'datesPGS',
      companyName: 'PGS Software S.A.',
      companyLogoClass: 'card__header-image card__header-image--pgs',
      jobTitle: 'SoftwareDeveloper',
      link: 'https://www.pgs-soft.com/',
      projects: [
        {
          title: 'PGSProject1Title',
          description: "PGSProject1Description",
          details: 'PGSProject1Details',
          icons: ['windows', 'visualstudiocode', 'jirasoftware', 'bitbucket', 'angular', 'materialdesign', 'cypress', 'postman']
        },
        {
          title: 'PGSProject2Title',
          description: "PGSProject2Description",
          details: 'PGSProject2Details',
          icons: ['windows', 'visualstudiocode', 'azuredevops', 'angular', 'materialdesign', 'cypress', 'swagger']
        }
      ]
    },
    {
      date: 'datesPMT',
      companyName: 'Primetals Technologies Poland Sp. z o.o.',
      companyLogoClass: 'card__header-image card__header-image--pmt',
      jobTitle: 'SoftwareDeveloper',
      link: 'https://www.primetals.com/',
      projects: [
        {
          title: 'PMTProject1Title',
          description: "PMTProject1Description",
          details: 'PMTProject1Details',
          icons: ['windows', 'visualstudiocode', 'azuredevops', 'gitlab', 'typescript', 'angular', 'materialdesign', 'bootstrap', 'postman', 'swagger']
        },
      ]
    },
    {
      date: 'datesSDA',
      companyName: 'SDA sp. z o.o.',
      companyLogoClass: 'card__header-image card__header-image--sda',
      jobTitle: 'Programming Trainer',
      link: 'https://sdacademy.pl/',
      projects: [
        {
          title: 'SDAProject1Title',
          description: "SDAProject1Description",
          details: 'SDAProject1Details',
          icons: ['windows', 'visualstudiocode', 'git', 'github', 'javascript', 'html5', 'css3', 'bootstrap', 'typescript', 'sass', 'angular', 'materialdesign']
        },
      ]
    },
    {
      date: 'datesDarlan',
      companyName: 'Darlan GmbH & Co. KG',
      companyLogoClass: 'card__header-image card__header-image--darlan',
      jobTitle: 'SoftwareDeveloper',
      link: 'http://www.darlan.com/',
      projects: [
        {
          title: 'DarlanProject1Title',
          description: "DarlanProject1Description",
          details: 'DarlanProject1Details',
          icons: ['windows', 'visualstudiocode', 'github', 'mariadb', 'typescript', 'nodedotjs', 'vuedotjs', 'quasar']
        },
        {
          title: 'DarlanProject2Title',
          description: "DarlanProject2Description",
          details: 'DarlanProject2Details',
          icons: ['windows', 'visualstudiocode', 'github', 'mariadb', 'javascript', 'nodedotjs', 'vuedotjs', 'quasar']
        },
        {
          title: 'DarlanProject3Title',
          description: "DarlanProject3Description",
          details: 'DarlanProject3Details',
          icons: ['windows', 'visualstudiocode', 'github', 'mariadb', 'javascript', 'php', 'vuedotjs']
        },
      ]
    },
    {
      date: 'datesQUPI',
      companyName: 'QUPI Inc.',
      companyLogoClass: 'card__header-image card__header-image--qupi',
      jobTitle: 'SoftwareDeveloper',
      link: 'https://qupi.com/',
      projects: [
        {
          title: 'QUPIProject1Title',
          description: "QUPIProject1Description",
          details: 'QUPIProject1Details'
        },
        {
          title: 'QUPIProject2Title',
          description: "QUPIProject2Description",
          details: 'QUPIProject2Details'
        },
        {
          title: 'QUPIProject3Title',
          description: "QUPIProject3Description",
          details: 'QUPIProject3Details'
        },
      ]
    },
    {
      date: 'datesIBS',
      companyName: 'I-BS.pl Sp. z o.o.',
      companyLogoClass: 'card__header-image card__header-image--ibs',
      jobTitle: 'SoftwareDeveloper',
      link: 'https://i-bs.pl/',
      projects: [
        {
          title: 'IBSProject1Title',
          description: "IBSProject1Description",
          details: 'IBSProject1Details'
        },
        {
          title: 'IBSProject2Title',
          description: "IBSProject2Description",
          details: 'IBSProject2Details'
        },
        {
          title: 'IBSProject3Title',
          description: "IBSProject3Description",
          details: 'IBSProject3Details'
        },
      ]
    },
    {
      date: 'datesCyfrowa',
      companyName: 'Cyfrowa Foto Sp. z o.o.',
      companyLogoClass: 'card__header-image card__header-image--cyfrowa',
      jobTitle: 'SoftwareDeveloper',
      link: 'https://www.cyfrowafoto.com/',
      projects: [
        {
          title: 'CyfrowaProject1Title',
          description: "CyfrowaProject1Description",
          details: 'CyfrowaProject1Details'
        },        {
          title: 'CyfrowaProject2Title',
          description: "CyfrowaProject2Description",
          details: 'CyfrowaProject2Details'
        },        {
          title: 'CyfrowaProject3Title',
          description: "CyfrowaProject3Description",
          details: 'CyfrowaProject3Details'
        },
      ]
    },
  ]

  constructor(
    private _bottomSheet: MatBottomSheet,
    private translate: TranslateService,
    private svgRegistry: SvgIconsRegistryService
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
