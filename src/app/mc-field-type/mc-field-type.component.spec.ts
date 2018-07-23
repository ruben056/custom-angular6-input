import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McFieldTypeComponent } from './mc-field-type.component';

describe('McFieldTypeComponent', () => {
  let component: McFieldTypeComponent;
  let fixture: ComponentFixture<McFieldTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McFieldTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McFieldTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
