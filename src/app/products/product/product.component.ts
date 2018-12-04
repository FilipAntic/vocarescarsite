import { Component, OnInit, Input } from '@angular/core';
import { Product } from './Product';
import { Language } from 'angular-l10n';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Language() lang: string;

  constructor() { }

  ngOnInit() {
  }

}
