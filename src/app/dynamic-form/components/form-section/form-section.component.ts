import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ConfigForm, Section } from 'src/app/common';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements OnInit {
  @Input() configForm: ConfigForm;
  @Input() FormGroup: FormGroup;
  @Output() sectionButtonClick = new EventEmitter<any>();
  @ViewChild('stepper') stepper: MatStepper;
  constructor() { }
  ngOnInit() {
  }
  getFormGroup(section: Section) {
    const fg = this.FormGroup.get(this.configForm.formName).get(section.formGrouping);
    //console.log(fg);
    return fg;
  }

  cardButtonClick($event: string) {
    if ($event == "previous") {
      this.stepper.previous();
    }
    else if ($event == "next") {
      this.stepper.next();
    }
    else {
      this.sectionButtonClick.emit($event);
    }
  }
}
