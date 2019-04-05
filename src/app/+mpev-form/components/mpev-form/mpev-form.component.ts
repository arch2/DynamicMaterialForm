import { Component, OnInit } from '@angular/core';
import { DataLoadService } from 'src/app/core/services/data-load.service';
import { ConfigForm } from 'src/app/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mpev-form',
  templateUrl: './mpev-form.component.html',
  styleUrls: ['./mpev-form.component.scss']
})
export class MpevFormComponent implements OnInit {
  configForm: ConfigForm;
  constructor(private dataService: DataLoadService) { }

  ngOnInit() {
    this.dataService.getMpevConfig()
      .subscribe(
        x => { this.configForm = x; console.log(this.configForm) }
      );
  }
  FormSubmit(form: FormGroup) {
    console.log(form.value);
  }
}