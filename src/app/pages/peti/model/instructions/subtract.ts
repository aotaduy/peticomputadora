import {ArithmeticInstruction} from './arithmetic-instruction';

export class Subtract extends ArithmeticInstruction {
  public static instructionBits = [0, 1, 0];

  public static mnemonic() {
    return 'SUB';
  }
  calculate(value1, value2) {
    return value1 - value2;
  }

  protected operatorString() {
    return '-';
  }
}
