import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpevFormComponent } from './mpev-form.component';

describe('MpevFormComponent', () => {
  let component: MpevFormComponent;
  let fixture: ComponentFixture<MpevFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpevFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpevFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
