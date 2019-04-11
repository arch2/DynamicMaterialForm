import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Card, Section } from 'src/app/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {
  // @Input() card: Card;
  @Input() section: Section;
  @Input() FormGroupName: string;
  @Input() FormGroup: FormGroup;
  @Output() cardButtonClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  fieldButtonClick($event: any) {
    this.cardButtonClick.emit($event);
  }
  dynamicCol(section: Section) {
    return (window.innerWidth <= 400) ? 1 : section.sectionGridColumns;
  }
}
