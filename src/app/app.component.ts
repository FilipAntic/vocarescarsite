import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  share,
  throttleTime
} from 'rxjs/operators';
import { Language } from 'angular-l10n';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @Language() lang: string;

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    console.log("Scroll Event");
  }


  constructor() { }
  ngOnInit() {

  }
  ngAfterViewInit(): void {

    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
    );
  }
  proba() {
    console.log("@");
  }
}
