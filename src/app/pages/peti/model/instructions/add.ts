import {ArithmeticInstruction} from './arithmetic-instruction';

export class Add extends ArithmeticInstruction {
  public static instructionBits = [0, 0, 1];

  public static mnemonic() {
    return 'ADD';
  }

  calculate(value1, value2) {
    return value1 + value2;
  }
  protected operatorString() {
    return '-';
  }
}
