import {Instruction} from './instruction';

export class Store extends Instruction {
  public static instructionBits = [0, 1, 1];

  public static mnemonic() {
    return 'STR';
  }

  executeOn(computer) {
    computer.memory.set(this.getAddress(), computer.accumulator);
  }
  toStringWith(context) {
    return `(${this.getAddress()}) = ${context.acumulator}`;
  }
}
