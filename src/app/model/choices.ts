export type satisfaction = 'I_CANT_GET_NONE' | 'BAD' | 'GOOD' | 'VERYGOOD' | 'NIRVANA';

export class Choice<T>{
  readonly possibleValues = ['I_CANT_GET_NONE', 'BAD',  'GOOD', 'VERYGOOD', 'NIRVANA'];
  readonly waarde: T;
  readonly visible: boolean = true;
  readonly enabled: boolean = true;

  constructor(waarde: T, visible: boolean, enabled: boolean, possibleValues: Array<string>){
    this.waarde = waarde;
    this.visible = visible;
    this.enabled = enabled;
    this.possibleValues = possibleValues;
  }

}
