import {Byte} from '../byte';
import {Computer} from '../computer';
import {ExecutionContextState} from '../execution-context-state';


export abstract class Instruction {

  static instructionBits = [0, 0, 0];
  code: Byte;
  public static mnemonic() {
    return 'ZZZ';
  }

  constructor(code) {
    this.code = code;
  }
  abstract executeOn(computer);
  getAddress() {
    return this.code.bits.slice(3).reduce( (sum, each, index) => sum + each * 2 ** (4 - index) , 0);
  }

  getValue() {
    return this.code.asInteger();
  }
  setAddress(address: number) {
    this.code = new Byte(this.instructionBits().concat(this.addressBitsFor(address)));
  }

  private addressBitsFor(address: number) {
    return Byte.bitsFor(address, 5);
  }

  public mnemonic() {
    return this.getClassInstance().mnemonic();
  }

  public instructionBits() {
    return this.getClassInstance().instructionBits;
  }
  private getClassInstance() {
    return this.constructor as typeof Instruction;
  }

  isData() {
    return false;
  }

  asBinaryString() {
    return this.code.bits.join('');
  }

  newContextFor(computer: Computer) {
    return new ExecutionContextState(computer);
  }

  toStringWith(context) {
    return '';
  }
}
