import {Instruction} from './instruction';
import {ControlUnit} from '../control-unit';


export class Jump extends Instruction {
  public static instructionBits = [1, 1, 0];

  public static mnemonic() {
    return 'JUI';
  }

  executeOn(computer: ControlUnit) {
    computer.jumpTo(this.getAddress());
  }

  toStringWith(context) {
    return `CP = ${this.getAddress()}
`;
  }
}
