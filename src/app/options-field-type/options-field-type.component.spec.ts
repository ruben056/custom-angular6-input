import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsFieldTypeComponent } from './options-field-type.component';

describe('OptionsFieldTypeComponent', () => {
  let component: OptionsFieldTypeComponent;
  let fixture: ComponentFixture<OptionsFieldTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsFieldTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsFieldTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
