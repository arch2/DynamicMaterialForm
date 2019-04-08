import { Component, OnInit, Input } from '@angular/core';
import { ConfigForm } from 'src/app/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements OnInit {
  @Input() configForm: ConfigForm;
  @Input() FormGroup: FormGroup;
  constructor() { }
  ngOnInit() {
    //console.log(this.FormGroup.get('TestForm.Test1'));
  }
}
