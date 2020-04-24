import {Instruction} from './instructions/instruction';
import {Computer} from './computer';

export class ExecutionContextState {
  instruction: Instruction;
  programCounter: number;
  accumulator: number;
  halt: boolean;
  count: number;

  constructor(computer: Computer) {
    this.instruction = computer.decodedInstruction;
    this.programCounter = computer.programCounter;
    this.accumulator = computer.accumulator;
    this.halt = computer.halt;
    this.count = computer.executions.length;
  }

  updateWith(computer: Computer) {

  }

  toString() {
    return `RI: ${this.instruction.mnemonic()} ${this.instruction.getAddress()}
CP = CP + 1 => CP = ${this.programCounter} + 1 = ${this.programCounter + 1}
${this.instruction.toStringWith(this)}
`;
  }
}
