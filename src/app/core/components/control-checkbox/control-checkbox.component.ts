import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'c-control-checkbox',
  templateUrl: './control-checkbox.component.html',
  styleUrls: ['./control-checkbox.component.scss']
})
export class ControlCheckboxComponent implements OnInit {
  @Input() field: Field;
  @Input() FormGroupName: string;
  @Input() FormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
