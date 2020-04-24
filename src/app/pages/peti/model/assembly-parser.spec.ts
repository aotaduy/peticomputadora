import {AssemblyParser} from './assembly-parser';
import {Add} from './instructions/add';
import {Stop} from './instructions/stop';
import {Subtract} from './instructions/subtract';
import {InstructionSet} from './instruction-set';

describe( 'AssemblyParser', () => {
  let subject: AssemblyParser;

  beforeEach(() => {
    subject = new AssemblyParser( new InstructionSet());
  });

  it('parse one halt instruction', () => {
    const result = subject.parse('STP');
    expect(result[0].constructor.name).toEqual('Stop');
  });

  it('parse fail on unknown instruction ', () => {
    expect(() => {
      subject.parse('KIL');
    } ).toThrow();
  });
  it('parse fail on out of bounds memory  ', () => {
    expect(() => {
      subject.parse('ADD 55');
    } ).toThrow();
  });
  it('parse one ADD instruction', () => {
    const result = subject.parse('ADD 1');
    expect(result[0].getAddress()).toEqual(1);
  });
  it('parse one number: 255', () => {
    const result = subject.parse('127');
    expect(result[0].getValue()).toEqual(127);
  });
  it('parse one number: -1', () => {
    const result = subject.parse('-1');
    expect(result[0].getValue()).toEqual(-1);
  });
  it('parse one number : 0', () => {
    const result = subject.parse('0');
    expect(result[0].getValue()).toEqual(0);
  });
  it('parse one number : 22', () => {
    const result = subject.parse('22');
    expect(result[0].getValue()).toEqual(22);
  });
  it('parse one ADD instruction with two digits', () => {
    const result = subject.parse('ADD 12');
    expect(result[0].constructor.name).toEqual('Add');
    expect(result[0].getAddress()).toEqual(12);
  });

  it('parse one ADD instruction with leading zero', () => {
    const result = subject.parse('ADD 01');
    expect(result[0].constructor.name).toEqual('Add');
    expect(result[0].getAddress()).toEqual(1);
  });
  it('parse two instructions ', () => {
    const result = subject.parse(`ADD 01
STP`);
    expect(result.length).toEqual(2);
    expect(result[0].constructor.name).toEqual('Add');
    expect(result[0].getAddress()).toEqual(1);
    expect(result[1].constructor.name).toEqual('Stop');
  });
  it('parse three instructions ', () => {
    const result = subject.parse(`ADD 01
SUB 4
STP`);
    expect(result.length).toEqual(3);
    expect(result[0].constructor.name).toEqual('Add');
    expect(result[0].getAddress()).toEqual(1);
    expect(result[1].constructor.name).toEqual('Subtract');
    expect(result[2].constructor.name).toEqual('Stop');
  });

});
