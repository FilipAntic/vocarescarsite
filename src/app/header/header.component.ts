import { Component, OnInit, HostListener } from '@angular/core';
import { Language, LocaleService, TranslationService } from 'angular-l10n';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Language() lang: string;
  languages: SelectItem[];
  selectedLanguage: any;
  isToggleClicked = false;
  serbianLabel = '';
  englishLabel = '';
  constructor(public locale: LocaleService, public translation: TranslationService) { }

  ngOnInit() {

    this.languages = [];
    let item: SelectItem = { label: this.translation.translate('menu.menuLanguageEnglish'), value: 1 };
    this.languages.push(item);
    item = { label: this.translation.translate('menu.menuLanguageSerbian'), value: 2 };
    this.languages.push(item);
    this.translation.translationChanged().subscribe(
      () => { this.serbianLabel = this.translation.translate('menu.menuLanguageSerbian'); }
    );
    this.translation.translationChanged().subscribe(
      () => { this.serbianLabel = this.translation.translate('menu.menuLanguageEnglish'); }
    );
    // item = { label: this.translation.translate('menu.menuLanguageFrench'), value: 3 };
    // this.languages.push(item);
    if (this.lang === 'en') {
      this.selectedLanguage = 1;
    } else if (this.lang === 'sr') {
      this.selectedLanguage = 2;
    } else if (this.lang === 'fr') {
      // this.selectedLanguage = 3;
    }
    setTimeout(() => {
      console.log(this.serbianLabel)
    }, 2000)
  }

  onChange(selLang: number) {
    this.selectedLanguage = selLang;
    if (this.selectedLanguage === 1) {
      this.selectLocale('en', 'US', 'USD');
    }
    else if (this.selectedLanguage === 2) {
      this.selectLocale('sr', 'RS', 'RSD');
    }

  }
  selectLocale(language: string, country: string, currency: string): void {
    //this.locale.setDefaultLocale(language, country);
    //this.locale.setCurrentCurrency(currency);
    //location.reload();
    console.log(this.locale);
    this.locale.setCurrentLanguage(language);
  }
  openMenu() { // click handler
    this.isToggleClicked = !this.isToggleClicked;
  }
}
