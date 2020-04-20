import {Byte} from './byte';

export class Memory {

  bytes: Array<Byte>;

  constructor(size: number) {
    this.bytes = [];
    for (let i = 0 ; i < size; i++) {
      this.bytes.push(new Byte());
    }
  }
  get(index) {
    return this.bytes[index];
  }
  set(index, byte) {
    return this.bytes[index] = byte;
  }
}
