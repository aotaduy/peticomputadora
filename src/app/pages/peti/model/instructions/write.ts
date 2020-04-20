import {Instruction} from './instruction';

export class Write extends Instruction {
  public static instructionBits = [1, 1, 1];

  public static mnemonic() {
    return 'WRT';
  }

  executeOn(computer) {
    console.log(computer.accumulator);
  }
  setAddress() {
    super.setAddress(0);
  }

  toStringWith(context) {
    return `PRINT ${context.acumulator}`;
  }
}
