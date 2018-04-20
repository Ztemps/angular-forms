import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  user: Object = {
    name: null,
    lastname: null,
    email: null,
    country: '',
    genre: null,
    terms: false
  };

  genreList = ['Male' , 'Female'];
  countryList = [{
    code: 'ES',
    name: 'Spain'
  },
  {
    code: 'ITA',
    name: 'Italy'
  }, {
    code: 'GER',
    name: 'Germany'
  }];

  constructor() { }

  saveForm(form: NgForm) {
    console.log('FORMS!', form);
    console.log('FORMS!', form['value']);
  }

}
