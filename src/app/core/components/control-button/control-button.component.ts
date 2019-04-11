import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Field } from 'src/app/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'c-control-button',
  templateUrl: './control-button.component.html',
  styleUrls: ['./control-button.component.scss']
})
export class ControlButtonComponent implements OnInit {
  @Input() field: Field;
  @Input() FormGroupName: string;
  @Input() FormGroup: FormGroup;
  @Output() buttonClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  clickEvent() {
    this.buttonClick.emit(this.field.value);
  }
}
