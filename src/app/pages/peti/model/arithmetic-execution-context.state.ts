import {ExecutionContextState} from './execution-context-state';
import {ControlUnit} from './control-unit';
import {ArithmeticInstruction} from './instructions/arithmetic-instruction';
import {Byte} from './byte';

export class ArithmeticExecutionContextState extends ExecutionContextState {

  operand: Byte;
  accumulatorAfter: number;
  instruction: ArithmeticInstruction;
  constructor(computer: ControlUnit) {
    super(computer);
    this.operand = this.instruction.getOperand(computer);
  }

  updateWith(computer: ControlUnit) {
    super.updateWith(computer);
    this.accumulatorAfter = computer.accumulator;
  }
}
