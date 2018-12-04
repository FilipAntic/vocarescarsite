import { Component, OnInit } from '@angular/core';
import { Product } from './product/Product';
import { Language } from 'angular-l10n';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Language() lang: string;

  products: Product[] = [];

  constructor() { }
  ngOnInit() {
    this.products[0] = { imageSrc: "snail1.jpg", title: "Proba", description: "Lorem ipsuuuuuuuuuuuuum" };
    this.products[1] = { imageSrc: "snail2.jpg", title: "Proba2", description: "Lorem ipsuuuuuuuuuuuuumLorem ipsuuuuuuuuuuuuum" };
    // this.products[2] = { imageSrc: "snail2.jpg", title: "Proba2", description: "Lorem ipsuuuuuuuuuuuuumLorem ipsuuuuuuuuuuuuum" };
  }

}
