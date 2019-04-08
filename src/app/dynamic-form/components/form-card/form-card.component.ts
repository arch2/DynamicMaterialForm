import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {
  @Input() card: Card;
  @Input() FormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
