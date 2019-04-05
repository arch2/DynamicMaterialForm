import { Component, OnInit, Input } from '@angular/core';
import { ConfigForm, Section } from 'src/app/common';
import { FormGroup, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements OnInit {
  @Input() configForm: ConfigForm;
  @Input() FormGroup: FormGroup;
  dontload: boolean = false;
  constructor() { }

  ngOnInit() {
    //console.log(this.FormGroup.get('TestForm.Test1'));
  }
  getSectionFormGroupName(section: Section): string {
    const name = this.configForm.formName + '.' + section.formGrouping;
    //const name = section.formGrouping;
    // return this.FormGroup.get(name);
    //console.log(name);
    // const testfg = this.FormGroup.get(this.configForm.formName);
    // console.log(testfg instanceof FormGroup);
    // const fg = this.FormGroup.get(name);
    // console.log(fg instanceof FormGroup);
    // console.log(fg);
    // const fg2 = this.FormGroup.get(section.formGrouping);
    // console.log(fg2 instanceof FormGroup);
    return name;
  }
  getSectionFormGroup(section: Section): FormGroup {
    const name = this.configForm.formName + '.' + section.formGrouping;
    return this.FormGroup.get(name) as FormGroup;
  }
  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.FormGroup.get(this.configForm.formName); }

}
