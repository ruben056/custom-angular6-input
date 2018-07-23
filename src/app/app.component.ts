import { Component } from '@angular/core';
import { Field } from './model/field';
import { Choice } from './model/choices'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  txt1 = new Field('content of the field1', true, true, true);
  txtDisabled = new Field('content of the disabled field', true, false, true);
  txtHidden = new Field('content of the field hidden field', false,true , true);

  satisfaction = new Choice('I_CANT_GET_NONE', true, true,
  ['I_CANT_GET_NONE', 'BAD',  'GOOD', 'VERYGOOD', 'NIRVANA']);
  satisfactionDisabled = new Choice('I_CANT_GET_NONE', true, false,
  ['I_CANT_GET_NONE', 'BAD',  'GOOD', 'VERYGOOD', 'NIRVANA']);

  constructor(){}

  toggleHiddenField(){
   this.txtHidden = new Field(
     this.txtHidden.waarde,
     !this.txtHidden.visible,
     this.txtHidden.enabled,
      this.txtHidden.valid);
  }

  logChange(event: any){
    console.log("updated input : ", JSON.stringify(event));
  }
}
