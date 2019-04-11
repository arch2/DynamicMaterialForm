import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from 'src/app/common';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() field: Field;
  @Input() FormGroupName: string;
  @Input() FormGroup: FormGroup;
  @Output() fieldButtonClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    // console.log("Field:");
    // console.log(this.FormGroup);
  }
  buttonClick($event: any) {
    this.fieldButtonClick.emit($event);
  }
}
