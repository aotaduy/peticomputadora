import {Computer} from '../computer';
import {Jump} from './jump';
import {ExecutionContextState} from '../execution-context-state';

export class JumpNegative extends Jump {
  public static instructionBits = [1, 0, 1];

  public static mnemonic() {
    return 'JUN';
  }

  executeOn(computer: Computer) {
    if (computer.accumulator < 0 ) {
      super.executeOn(computer);
    }
  }
  toStringWith(context: ExecutionContextState) {
    const pre =  `IF A < 0 = => CP = ${this.getAddress()}
    A < 0 = ${context.accumulator < 0}
`;
    let after =  `CP = ${context.programCounter}`;
    if (context.accumulator < 0 ) {
      after = `CP = ${this.getAddress()}`;
    }
    return pre + after;
  }

}
