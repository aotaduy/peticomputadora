import {Instruction} from './instruction';
import {Computer} from '../computer';


export class Jump extends Instruction {
  public static instructionBits = [1, 1, 0];

  public static mnemonic() {
    return 'JUI';
  }

  executeOn(computer: Computer) {
    computer.jumpTo(this.getAddress());
  }

  toStringWith(context) {
    return `CP = ${this.getAddress()}
`;
  }
}
