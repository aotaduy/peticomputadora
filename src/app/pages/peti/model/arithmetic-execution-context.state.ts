import {ExecutionContextState} from './execution-context-state';
import {Computer} from './computer';
import {ArithmeticInstruction} from './instructions/arithmetic-instruction';
import {Byte} from './byte';

export class ArithmeticExecutionContextState extends ExecutionContextState {

  operand: Byte;
  accumulatorAfter: number;
  instruction: ArithmeticInstruction;
  constructor(computer: Computer) {
    super(computer);
    this.operand = this.instruction.getOperand(computer);
  }

  updateWith(computer: Computer) {
    super.updateWith(computer);
    this.accumulatorAfter = computer.accumulator;
  }
}
