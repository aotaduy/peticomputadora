import {AssemblyParser} from '../assembly-parser';
import {InstructionSet} from '../instruction-set';
import {Computer} from '../computer';
import {Memory} from '../memory';

describe( 'Acum Program', () => {
  let parser, computer: Computer;
  const program = `STR 13
SUB 13
ADD 10
ADD 11
STR 10
SUB 12
JUN 00
WRT
STP
00
0
1
10`;
  beforeEach(() => {
    parser = new AssemblyParser( new InstructionSet());
    computer = new Computer(new Memory(32));
  });

  it('run', () => {
    const result = parser.parse(program);
    computer.load(result);
    computer.run();
    expect(computer.accumulator).toEqual(0);
    expect(computer.memory.get(10).asInteger()).toEqual(10);
    expect(computer.programCounter).toEqual(9);
  });

});
