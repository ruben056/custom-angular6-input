import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Choice  } from '../model/choices';

@Component({
  selector: 'app-mc-field-type',
  templateUrl: './mc-field-type.component.html',
  styleUrls: ['./mc-field-type.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => McFieldTypeComponent),
      multi: true
    }
  ]
})
export class McFieldTypeComponent implements ControlValueAccessor  {

  choice: Choice<any>;
  propagateChange = (field: Choice<any>) => {};

  constructor() { }

  writeValue(value: Choice<any>) {
    this.choice = value;
    this.propagateChange(this.choice);
  }

  updateModel(chosenValue : any){
    this.choice = new Choice(chosenValue,
      this.choice.visible, this.choice.enabled, this.choice.possibleValues);
    this.propagateChange(this.choice);
  }

  registerOnChange(fn: (field: Choice<any>) => {}) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
