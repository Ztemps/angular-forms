import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  form: FormGroup;

  user: Object = {
    fullName: {
      name: '',
      lastname: ''
    }, mail: ''
  };

  constructor() {
    this.form = new FormGroup({

      'fullname': new FormGroup({
        'name': new FormControl('', [Validators.required, Validators.minLength(5)]),
        'lastname': new FormControl('', Validators.required)
      }),
      'mail': new FormControl('',
                              [Validators.required,
                               Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),

    });
  }

  saveChanges() {

    console.log(this.form);
    console.log('SAVE CHANGES!:', this.form.value);
  }

}
