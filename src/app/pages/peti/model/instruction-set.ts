import {Add} from './instructions/add';
import {Subtract} from './instructions/subtract';
import {Store} from './instructions/store';
import {Stop} from './instructions/stop';
import {JumpNegative} from './instructions/jump-negative';
import {Jump} from './instructions/jump';
import {Write} from './instructions/write';
import {JumpPositive} from './instructions/jump-positive';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InstructionSet {

  instructionTable = [
    Stop,
    Add,
    Subtract,
    Store,
    JumpPositive,
    JumpNegative,
    Jump,
    Write,
  ];

  instructionFor(byte){
     const instructionClass = this.instructionTable[this.getInstructionIndex(byte)];
     return new instructionClass(byte);
  }

  private getInstructionIndex(byte: any) {
    return byte.bits.slice(0, 3).reduce( (sum, each, index) => sum + each * 2 ** (2 - index) , 0);
  }
}


