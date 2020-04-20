import {Instruction} from './instructions/instruction';
import {ControlUnit} from './control-unit';

export class ExecutionContextState {
  instruction: Instruction;
  programCounter: number;
  acumulator: number;
  halt: boolean;
  count: number;

  constructor(computer: ControlUnit) {
    this.instruction = computer.decodedInstruction;
    this.programCounter = computer.programCounter;
    this.acumulator = computer.accumulator;
    this.halt = computer.halt;
    this.count = computer.executions.length;
  }

  updateWith(computer: ControlUnit) {

  }

  toString() {
    return `RI: ${this.instruction.mnemonic()} ${this.instruction.getAddress()}
CP = CP + 1 => CP = ${this.programCounter} + 1 = ${this.programCounter + 1}
${this.instruction.toStringWith(this)}
`;
  }
}
