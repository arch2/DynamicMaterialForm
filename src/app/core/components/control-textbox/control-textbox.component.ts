import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'c-control-textbox',
  templateUrl: './control-textbox.component.html',
  styleUrls: ['./control-textbox.component.scss']
})
export class ControlTextboxComponent implements OnInit {
  @Input() field: Field;
  @Input() FormGroupName: string;
  @Input() FormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  fieldInvalidTouched() {
    return this.FormGroup.get(this.field.key).invalid && this.FormGroup.get(this.field.key).touched;
  }
  getErrorMessage() {
    let errors: string[] = [];
    this.field.validations.forEach(x => {
      if (this.FormGroup.get(this.field.key).hasError(x.validationType)) {
        errors.push(x.validationMessage);
      }
    });
    return errors.join(", ");
  }
}
