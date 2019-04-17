import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Section, ConfigForm, Validation } from 'src/app/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.scss']
})
export class FormLayoutComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<any>();
  @Input() configForm: ConfigForm;
  FormGroup: FormGroup;
  payLoad: string;
  constructor() { }

  ngOnInit() {
    this.FormGroup = this.FormToFormGroup(this.configForm);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.FormGroup.value);
    this.formSubmitted.emit(this.FormGroup);
  }
  sectionButtonClick($event: any) {

  }
  FormToFormGroup(configuredForm: ConfigForm) {
    let sectionGroup: any = {};
    configuredForm.sections.forEach(section => {
      let group: any = {};
      section.cards.forEach(card => {
        card.fields.forEach(field => {
          if (field.controlType == "button") { return; }
          if (field.controlType == "datetimepicker") { field.value = new Date(field.value) };
          group[field.key] = new FormControl({ value: field.value || '', disabled: field.disabled }, this.mapValidators(field.validations));
        })
      })
      if (sectionGroup[section.formGrouping]) {
        let existingFG: FormGroup = sectionGroup[section.formGrouping];
        let fg: FormGroup = new FormGroup(group);
        Object.keys(fg.controls).forEach(field => {
          const control = fg.get(field);
          existingFG.addControl(field, control);
        });
      }
      else {
        sectionGroup[section.formGrouping] = new FormGroup(group);
      }
    });
    let finishedform: any = {};
    finishedform[configuredForm.formName] = new FormGroup(sectionGroup);
    // let formGroup: FormGroup = new FormGroup(sectionGroup);
    let formGroup: FormGroup = new FormGroup(finishedform);
    // this.ConfigureEvents(formGroup, formSection);
    return formGroup;
  }
  // FormToFormGroup(formSection: Array<any>[]) {
  //     let sectionGroup: any = {};
  //     formSection.forEach(section => {
  //         let group: any = {};
  //         section["cards"].forEach(card => {
  //             card["fields"].forEach(field => {
  //                 group[field.key] = new FormControl({ value: field.value || '', disabled: field.disabled }, this.mapValidators(field.validation));
  //             })
  //         })
  //         if (sectionGroup[section["formId"]]) {
  //             let existingFG: FormGroup = sectionGroup[section["formId"]];
  //             let fg: FormGroup = new FormGroup(group);
  //             Object.keys(fg.controls).forEach(field => {
  //                 const control = fg.get(field);
  //                 existingFG.addControl(field, control);
  //             });
  //         }
  //         else {
  //             sectionGroup[section["formId"]] = new FormGroup(group);
  //         }
  //     });
  //     let formGroup: FormGroup = new FormGroup(sectionGroup);
  //     // this.ConfigureEvents(formGroup, formSection);
  //     return formGroup;
  // }
  private mapValidators(validators: Validation[]) {
    const formValidators = [];

    if (validators) {
      for (const validation of validators) {
        if (validation.validationType === 'required') {
          formValidators.push(Validators.required);
        }
        // if (validation.validationType === 'minLength') {
        //   formValidators.push(Validators.min(validators[validation.validationValue]));
        // }
        if (validation.validationType === 'email') {
          formValidators.push(Validators.email);
        }
        if (validation.validationType === 'pattern') {
          formValidators.push(Validators.pattern(validators[validation.validationMessage]));
        }
      }
    }

    return formValidators;
  }
  // private ConfigureEvents(formGroup: FormGroup, formSection: FormSection[]) {
  //     formSection.forEach(section => {
  //         section.cards.forEach(card => {
  //             card.fields.forEach(field => {
  //                 if (field.dataToLoad && field.controlToTieTo) {
  //                     formGroup.get(section.id).get(field.key).valueChanges.subscribe(val => this.LoadChildDropDownValues(field.dataToLoad, field.controlToTieTo, val, formGroup, section));
  //                 }
  //                 if (field.valueToAddValidator && field.controlToAddValidator) {
  //                     formGroup.get(section.id).get(field.key).valueChanges.subscribe(val => this.AddRemoveValidator(field.valueToAddValidator, field.controlToAddValidator, val, formGroup, section));
  //                     this.AddRemoveValidator(field.valueToAddValidator, field.controlToAddValidator, field.value, formGroup, section);
  //                 }
  //                 if (field.controlType == ControlType.Formula) {
  //                     field.options.forEach(fieldToCalculate => {
  //                         formGroup.get(fieldToCalculate.Name).get(fieldToCalculate.Value).valueChanges.subscribe(val => this.CalculateField(field, formGroup, section));
  //                     });
  //                     this.CalculateField(field, formGroup, section);
  //                 }
  //             })
  //         })
  //     });
  // }
  // private CalculateField(controlToPutCalculation: FormField<string>, group: FormGroup, section: FormSection) {
  //     let sum: number = 0;
  //     controlToPutCalculation.options.forEach(field => {
  //         if (group.get(field.Name).get(field.Value).value && parseInt(group.get(field.Name).get(field.Value).value)) {
  //             sum += parseInt(group.get(field.Name).get(field.Value).value);
  //         }
  //     });
  //     group.get(section.id).get(controlToPutCalculation.key).setValue(sum);
  // }
  // private AddRemoveValidator(valueToAddValidator: string, controlToAddValidator: FormField<string>, val: any, group: FormGroup, section: FormSection) {
  //     if (valueToAddValidator == val) {
  //         group.get(section.id).get(controlToAddValidator.key).setValidators(this.mapValidators(controlToAddValidator.validation));
  //     } else {
  //         group.get(section.id).get(controlToAddValidator.key).setValidators([]);
  //     }
  //     group.get(section.id).get(controlToAddValidator.key).updateValueAndValidity();
  // }
  // private clearField(controlToClear: FormField<string>, group: FormGroup, section: FormSection) {
  //     if (controlToClear) {
  //         controlToClear.options = null;
  //         group.get(section.id).get(controlToClear.key).setValue("");
  //         this.clearField(controlToClear.controlToTieTo, group, section);
  //     }
  // }
  // private LoadChildDropDownValues(dataToLoad: string, actionField: FormField<string>, val: any, group: FormGroup, section: FormSection) {
  //     this.configService.get_child_dropdown_values(dataToLoad, val).subscribe(
  //         results => {
  //             actionField.options = results;
  //             group.get(section.id).get(actionField.key).setValue("");
  //             if (actionField.controlToTieTo) {
  //                 this.clearField(actionField.controlToTieTo, group, section);
  //             }
  //         },
  //         e => console.log(e),
  //         () => console.log("done loading {0} from service", dataToLoad));
  // }

}
