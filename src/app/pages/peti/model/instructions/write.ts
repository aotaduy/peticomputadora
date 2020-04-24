import {Instruction} from './instruction';
import {Computer} from "../computer";

export class Write extends Instruction {
  public static instructionBits = [1, 1, 1];

  public static mnemonic() {
    return 'WRT';
  }

  executeOn(computer: Computer) {
    computer.appendOutput(computer.accumulator.toString());
  }
  setAddress() {
    super.setAddress(0);
  }

  toStringWith(context) {
    return `PRINT ${context.accumulator}`;
  }
}
