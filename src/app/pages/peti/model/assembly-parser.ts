import {InstructionSet} from './instruction-set';
import {Instruction} from './instructions/instruction';
import {Data} from './instructions/data';
import {Byte} from './byte';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssemblyParser {

  instructionSet;
  constructor( private set: InstructionSet) {
    this.instructionSet = set;
  }
  parse(source: string): Instruction[] {

    const lines = source.split(/\r?\n/);
    return lines
      .filter(each => each.length !== 0)
      .map((sourceLine, index) => this.parseLine(sourceLine, index));
  }

  private parseLine(sourceLine: string, line: number) {
    if ('9' >= sourceLine[0] && sourceLine[0] < '9') {
      return this.parseNumber(sourceLine, line);
    } else  {
      return this.parseInstruction(sourceLine, line);
    }
  }


  private parseInstruction(sourceLine: string, line: number) {
    const mnemonic = sourceLine.slice(0, 3).toUpperCase();
    const instructionClass = this.instructionSet.instructionTable.find(each => each.mnemonic() === mnemonic);
    if (instructionClass === undefined) {
      throw new Error(`Instruccion no reconocida ${mnemonic}, linea: ${line}`);
    }
    const instruction = new instructionClass();
    instruction.setAddress(this.parseAddress(sourceLine, line));
    return instruction;
  }

  private parseAddress(sourceLine: string, line: number) {
    const address = Number.parseInt(sourceLine.slice(3), 10);
    if (address < 0 || address > 31 ) {
      throw  new Error(`Direccion fuera de rango ${address}, linea: ${line}`);
    }
    return address;
  }


  private parseNumber(sourceLine: string, line: number) {
      const result = Number.parseInt(sourceLine, 10);
      if (result < -127 || result > 127 ) {
        throw  new Error(`Constante fuera de rango ${result}, linea: ${line}`);
      }
      return new Data(Byte.from8bitInteger(result));
    }
}
