import {InstructionSet} from './instruction-set';
import {Instruction} from './instructions/instruction';
import {Memory} from './memory';
import {ExecutionContextState} from './execution-context-state';


export class ControlUnit {
  memory: Memory;
  public halt = false;
  public programCounter = 0;
  public accumulator = 0;
  public instructionRegister;
  public decodedInstruction: Instruction;
  private instructionSet: any;
  public executions: ExecutionContextState[] = [];

  constructor(
    memory?: Memory,
  ) {
    this.memory = memory ? memory : new Memory(32);
    this.instructionSet = new InstructionSet();
  }

  public reset() {
    this.programCounter = 0;
    this.accumulator = 0;
    this.executions = [];
  }
  currentExecution() {
    return this.executions[this.executions.length - 1];
  }
  public runInstruction() {
    if (this.isHalted()) {
      return;
    }
    this.getInstruction();
    this.incrementProgramCounter();
    this.decodeInstruction();
    this.executeInstruction();
  }

  isHalted() {
    return this.halt;
  }

  private getInstruction() {
    this.instructionRegister = this.memory.get(this.programCounter);
  }

  private incrementProgramCounter() {
    this.programCounter = this.programCounter + 1;
  }

  private decodeInstruction() {
    this.decodedInstruction = this.instructionSet.instructionFor(this.instructionRegister);
    this.executions.push(this.decodedInstruction.newContextFor(this));
  }

  private executeInstruction() {
    this.decodedInstruction.executeOn(this);
    this.currentExecution().updateWith(this);
  }

  jumpTo(address: number) {
    this.programCounter = address;
  }
  run() {
    this.reset();
    let limit = 0;
    const maxRuns = 1000;
    while (!this.isHalted() && limit < maxRuns) {
      this.runInstruction();
      limit++;
    }
    if (limit >= maxRuns) {
      throw new Error('Run limit exceeded');
    }
  }

  load(program: Instruction[]) {
    program.forEach((instruction, index) => this.memory.set(index, instruction.code));
  }

  memorySnapshot(size) {
    const indexes = Array(size).fill(0).map((each, index) => index);
    return indexes.map(index => this.instructionSet.instructionFor(this.memory.get(index)));
  }
}
