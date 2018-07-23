import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFieldTypeComponent } from './input-field-type/input-field-type.component';
import { McFieldTypeComponent } from './mc-field-type/mc-field-type.component';


@NgModule({
  declarations: [
    AppComponent,
    InputFieldTypeComponent,
    McFieldTypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
