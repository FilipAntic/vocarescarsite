import { Component, OnInit } from '@angular/core';
import { Language, LocaleService, TranslationService } from 'angular-l10n';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Language() lang: string;

  constructor(public locale: LocaleService, public translation: TranslationService) { }

  ngOnInit() {
  }

}
