import { Component, OnInit } from '@angular/core';
import { ConfigForm } from 'src/app/common';
import { DataLoadService } from 'src/app/core/services/data-load.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-violation-form',
  templateUrl: './violation-form.component.html',
  styleUrls: ['./violation-form.component.scss']
})
export class ViolationFormComponent implements OnInit {
  configForm: ConfigForm;
  constructor(private dataService: DataLoadService) { }

  ngOnInit() {
    this.dataService.getViolationsConfig()
      .subscribe(
        x => {
          this.configForm = x;
        }
      );
  }
  FormSubmit(form: FormGroup) {
    console.log(form.value);
  }

}
