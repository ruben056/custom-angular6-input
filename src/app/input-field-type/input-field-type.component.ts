import { Component, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Field } from '../model/field';

@Component({
  selector: 'app-input-field-type',
  templateUrl: './input-field-type.component.html',
  styleUrls: ['./input-field-type.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldTypeComponent),
      multi: true
    }
  ]
})
export class InputFieldTypeComponent implements ControlValueAccessor  {

  fieldInfo:Field<string>;
  propagateChange = (field: Field<string>) => {};

  constructor() { }

  writeValue(value: Field<string>) {
    this.fieldInfo = value;
    this.propagateChange(this.fieldInfo);
  }

  updateModel(event : any){
    this.fieldInfo = new Field(event.target.value,
      this.fieldInfo.visible, this.fieldInfo.enabled, this.fieldInfo.valid);
    this.propagateChange(this.fieldInfo);
  }

  registerOnChange(fn: (field: Field<string>) => {}) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
