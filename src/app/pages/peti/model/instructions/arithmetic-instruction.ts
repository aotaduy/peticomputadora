import {Instruction} from './instruction';
import {ArithmeticExecutionContextState} from '../arithmetic-execution-context.state';
import {ControlUnit} from '../control-unit';

export abstract class ArithmeticInstruction extends Instruction {

  executeOn(computer) {
    const operand = this.getOperand(computer);
    computer.accumulator = this.calculate(computer.accumulator, operand.asInteger());
  }

  getOperand(computer) {
    return computer.memory.get(this.getAddress());
  }

  abstract calculate(value1, value2);

  toStringWith(context: ArithmeticExecutionContextState) {
    return `A = A ${this.operatorString()} (${this.getAddress()})
A = ${context.acumulator} ${this.operatorString()} ${context.operand.asInteger()}
A = ${context.accumulatorAfter}
`;
  }

  protected operatorString() {
    return '+';
  }

  newContextFor(computer: ControlUnit) {
    return new ArithmeticExecutionContextState(computer);
  }
}
