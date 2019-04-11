import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTextboxComponent } from './control-textbox.component';

describe('ControlTextboxComponent', () => {
  let component: ControlTextboxComponent;
  let fixture: ComponentFixture<ControlTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
