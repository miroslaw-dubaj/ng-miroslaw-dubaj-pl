import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContactsComponent } from './contacts/contacts.component';
import { TranslateService } from '@ngx-translate/core';
import { SvgIconsRegistryService } from './svg-icons-registry.service';
import { registerLocaleData } from '@angular/common';
import localeEnGb from '@angular/common/locales/en-GB';
import localeUk from '@angular/common/locales/uk';
import localeDe from '@angular/common/locales/de';
import localePl from '@angular/common/locales/pl';
import { AssetsService } from './assets.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentLang = 'en';
  cards: any[] = [];
  skills: any = {};
  qualifications: any  = {}

  ngOnInit() {
    this.assetsService.getCards().subscribe(data => {
      this.cards = data;
    });
    this.assetsService.getSkills().subscribe(data => {
      this.skills = data;
    });
    this.assetsService.getQualifications().subscribe(data => {
      this.qualifications = data;
    });
  }

  constructor(
    private _bottomSheet: MatBottomSheet,
    public translate: TranslateService,
    private assetsService: AssetsService,
    private svgRegistry: SvgIconsRegistryService
  ) {
    translate.use(this.currentLang);
    registerLocaleData(localeEnGb, 'en');
    registerLocaleData(localeUk, 'uk');
    registerLocaleData(localePl, 'pl');
    registerLocaleData(localeDe, 'de');
  }

  openBottomSheet(): void {
    this._bottomSheet.open(ContactsComponent);
  }

  toggleCurrentLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(this.currentLang);
  }
}
