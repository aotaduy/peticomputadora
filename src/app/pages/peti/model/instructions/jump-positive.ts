import {Computer} from '../computer';
import {Jump} from './jump';
import {ExecutionContextState} from '../execution-context-state';

export class JumpPositive extends Jump {
  public static instructionBits = [1, 0, 0];

  public static mnemonic() {
    return 'JUP';
  }

  executeOn(computer: Computer) {
    if (computer.accumulator >= 0 ) {
      super.executeOn(computer);
    }
  }

  toStringWith(context: ExecutionContextState) {
    const pre =  `IF A >= 0 = => CP = ${this.getAddress()}
    A >= 0 = ${context.accumulator >= 0}
`;
    let after =  `CP = ${context.programCounter}`;
    if (context.accumulator >= 0 ) {
      after = `CP = ${this.getAddress()}`;
    }
    return pre + after;
  }
}
