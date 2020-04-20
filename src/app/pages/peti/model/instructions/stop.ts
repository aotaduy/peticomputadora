import {Instruction} from './instruction';

export class Stop extends Instruction {
  public static instructionBits = [0, 0, 0];

  public static mnemonic() {
    return 'STP';
  }

  executeOn(computer) {
    computer.halt = true;
  }
  setAddress() {
    super.setAddress(0);
  }
  toStringWith(context) {
    return 'STOP PROGRAM';
  }
}
