import {Byte} from './byte';
import {InstructionSet} from './instruction-set';


describe( 'InstructionSet', () => {

  let subject;
  beforeEach(() => {
    subject = new InstructionSet();
  });
  it('should create Stop instruction', () => {
    const instructionCode = new Byte([0, 0, 0, 0, 0, 0, 0, 0]);
    const result = subject.instructionFor(instructionCode);
    expect(result.mnemonic()).toEqual('STP');
  });
  it('should create Add instruction', () => {
    const instructionCode = new Byte([0, 0, 1, 0, 0, 0, 0, 0]);
    const result = subject.instructionFor(instructionCode);
    expect(result.mnemonic()).toEqual('ADD');
  });
  it('should create Sub instruction', () => {
    const instructionCode = new Byte([0, 1, 0, 0, 0, 0, 0, 0]);
    const result = subject.instructionFor(instructionCode);
    expect(result.mnemonic()).toEqual('SUB');
  });
});
