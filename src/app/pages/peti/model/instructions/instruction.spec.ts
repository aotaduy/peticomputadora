import {Byte} from '../byte';
import { InstructionSet} from '../instruction-set';
import { Add } from './add';


describe( 'ArithmeticInstruction', () => {

  let subject;
  beforeEach(() => {
    subject = new InstructionSet();
  });
  it('ADD should calculate address 0', () => {
    const instructionCode = new Byte([0, 0, 1, 0, 0, 0, 0, 0]);
    const result = new Add(instructionCode);
    expect(result.getAddress()).toEqual(0);
  });
  it('ADD should calculate address 31', () => {
    const instructionCode = new Byte([0, 0, 1, 1, 1, 1, 1, 1]);
    const result = new Add(instructionCode);
    expect(result.getAddress()).toEqual(31);
  });
  it('ADD should calculate address ', () => {
    const instructionCode = new Byte([0, 0, 1, 1, 1, 1, 0, 1]);
    const result = new Add(instructionCode);
    expect(result.getAddress()).toEqual(29);
  });
  it('ADD should set address ', () => {
    const result = new Add(new Byte());
    result.setAddress(10);
    expect(result.getAddress()).toEqual(10);
  });
});
