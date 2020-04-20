import {Instruction} from './instruction';
import {ControlUnit} from "../control-unit";
import {Byte} from "../byte";

export class Store extends Instruction {
  public static instructionBits = [0, 1, 1];

  public static mnemonic() {
    return 'STR';
  }

  executeOn(computer: ControlUnit) {
    computer.memory.set(this.getAddress(), Byte.from8bitInteger( computer.accumulator));
  }
  toStringWith(context) {
    return `(${this.getAddress()}) = ${context.acumulator}`;
  }
}
