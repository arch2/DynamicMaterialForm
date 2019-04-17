import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpvFormComponent } from './opv-form.component';

describe('OpvFormComponent', () => {
  let component: OpvFormComponent;
  let fixture: ComponentFixture<OpvFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpvFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
