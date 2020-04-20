import {Instruction} from './instruction';

export class Data extends Instruction {

  public static mnemonic() {
    return 'DAT';
  }

  executeOn(computer) {
  // Do nothing data will lbe considered noop
  }
  isData() {
    return true;
  }
}
