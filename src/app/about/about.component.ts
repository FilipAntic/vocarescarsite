import { Component, OnInit } from '@angular/core';
import { Language } from 'angular-l10n';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Language() lang: string;

  constructor() { }

  ngOnInit() {
  }

}
