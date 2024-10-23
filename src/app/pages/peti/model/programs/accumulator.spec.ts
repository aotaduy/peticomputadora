import {AssemblyParser} from '../assembly-parser';
import {InstructionSet} from '../instruction-set';
import {Computer} from '../computer';
import {Memory} from '../memory';

describe( 'Jump Program', () => {
  let parser, computer: Computer;
  const program = `STR 30
STR 30
ADD 12
SUB 10
JUP 08
ADD 13
WRT
STP
ADD 11
JUI 06
04
01
07
02
`;
  beforeEach(() => {
    parser = new AssemblyParser( new InstructionSet());
    computer = new Computer(new Memory(32));
  });

  it('run', () => {
    const result = parser.parse(program);
    computer.load(result);
    computer.run();
    expect(computer.accumulator).toEqual(4);
    expect(computer.programCounter).toEqual(8);
  });

});
