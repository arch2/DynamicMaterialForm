import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from 'src/app/common';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() field: Field;
  @Input() FormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
