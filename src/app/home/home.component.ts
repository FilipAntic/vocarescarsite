import { Component, OnInit } from '@angular/core';
import { Language } from 'angular-l10n';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentSlide: number = 0;
  @Language() lang: string;

  constructor() { }

  ngOnInit() {
  }

  onNext(): void {
    if (this.currentSlide === 2) {
      this.currentSlide = 0;
      return;
    }
    this.currentSlide++;
  }

  onPrev(): void {
    if (this.currentSlide === 0) {
      this.currentSlide = 2;
      return;
    }
    this.currentSlide--;
  }

  changeCurrentSlide(index) {
    this.currentSlide = index;
  }
}
