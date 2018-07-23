export class Field<T> {
  readonly waarde: T;
  readonly visible: boolean = true;
  readonly enabled: boolean = true;
  readonly valid: boolean = true;


  constructor(waarde:T, visible:boolean, enabled:boolean, valid:boolean){
    this.waarde = waarde;
    this.visible = visible;
    this.enabled = enabled;
    this.valid = valid;
  }
}
