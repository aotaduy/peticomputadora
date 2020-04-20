import {Byte} from '../byte';
import {ControlUnit} from '../control-unit';
import {Memory} from '../memory';


describe( 'Control unit', () => {

  let subject: ControlUnit;
  beforeEach(() => {
    const memory = new Memory(32);
    // program
    memory.set(0, new Byte([0, 0, 1, 0, 1, 0, 0, 0]));
    memory.set(1, new Byte([0, 0, 1, 0, 1, 0, 0, 1]));
    memory.set(2, new Byte([0, 0, 1, 0, 1, 0, 1, 0]));
    memory.set(3, new Byte([0, 0, 0, 0, 0, 0, 0, 0]));
    // Data
    memory.set(8, new Byte([0, 0, 0, 0, 0, 0, 1, 0]));
    memory.set(9, new Byte([0, 0, 0, 0, 0, 0, 1, 1]));
    memory.set(10, new Byte([0, 0, 0, 0, 0, 1, 1, 1]));
    subject = new ControlUnit(memory);
  });
  it('should execute add program', () => {
    subject.runInstruction();
    expect(subject.accumulator).toEqual(2);
    expect(subject.programCounter).toEqual(1);
    subject.runInstruction();
    expect(subject.accumulator).toEqual(5);
    subject.runInstruction();
    expect(subject.accumulator).toEqual(12);
    subject.runInstruction();
    expect(subject.accumulator).toEqual(12);
    expect(subject.isHalted()).toBeTruthy();
  });
});
