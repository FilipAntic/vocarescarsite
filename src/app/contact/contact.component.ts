import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Language } from 'angular-l10n';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat: number = 44.6787358;
  lng: number = 20.9481183;
  contactUsForm: FormGroup;
  @Language() lang: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactUsForm = this.formBuilder.group({
      'email': [null],
      'name': [null],
      'phoneNumber': [null],
      'message': [null]
    })
  }

}
