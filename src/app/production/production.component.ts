import { Component, OnInit } from '@angular/core';
import { Language } from 'angular-l10n';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {
  @Language() lang: string;

  constructor() { }

  ngOnInit() {
  }

}
