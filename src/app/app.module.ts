import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injectable, Inject } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { L10nConfig, L10nLoader, TranslationModule, StorageStrategy, ProviderType } from 'angular-l10n';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductionComponent } from './production/production.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ProductComponent } from './products/product/product.component';
import { ScrollDirective } from './shared/scroll.directive';
import { MenuCollapseDirective } from './shared/menu-collapse.directive';
import { HttpClientModule } from '@angular/common/http';



const l10nConfig: L10nConfig = {
  locale: {
    languages: [
      { code: 'en', dir: 'ltr' },
      { code: 'sr', dir: 'ltr' }
    ],
    language: 'en',
    storage: StorageStrategy.Cookie
  },
  translation: {
    providers: [
      { type: ProviderType.Static, prefix: 'assets/locale/locale-' }
    ],
    caching: true,
    missingValue: 'No key',
    composedKeySeparator: '.'
  }
};




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    ProductionComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    DropdownDirective,
    ProductComponent,
    ScrollDirective,
    MenuCollapseDirective
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    TranslationModule.forRoot(l10nConfig),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();
  }
}
