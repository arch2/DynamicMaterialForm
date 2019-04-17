import { Component, OnInit } from '@angular/core';
import { ConfigForm } from 'src/app/common';
import { DataLoadService } from 'src/app/core/services/data-load.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-opv-form',
  templateUrl: './opv-form.component.html',
  styleUrls: ['./opv-form.component.scss']
})
export class OpvFormComponent implements OnInit {
  configForm: ConfigForm;
  constructor(private dataService: DataLoadService) { }

  ngOnInit() {
    this.dataService.getOpvConfig()
      .subscribe(
        x => {
          this.configForm = x;
          console.log(this.configForm)
        }
      );
  }
  FormSubmit(form: FormGroup) {
    this.dataService.submitOpvForm("[ris2].[SetOpStg]", form.get(this.configForm.formName).get(String(this.configForm.sections[0].formGrouping)).value)
      .subscribe(
        x => {
          console.log(form.value);
        }
      )

  }

}
