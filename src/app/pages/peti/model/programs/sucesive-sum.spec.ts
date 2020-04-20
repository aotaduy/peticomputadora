import {AssemblyParser} from '../assembly-parser';
import {InstructionSet} from '../instruction-set';
import {ControlUnit} from '../control-unit';
import {Memory} from '../memory';

describe( 'Acum Program', () => {
  let parser, computer: ControlUnit;
  const program = `ADD 11
STR 10
SUB 12
JUN 00
WRT
STP
00
00
00
00
10
200
250`;
  beforeEach(() => {
    parser = new AssemblyParser( new InstructionSet());
    computer = new ControlUnit(new Memory(32));
  });

  it('run', () => {
    const result = parser.parse(program);
    computer.load(result);
    computer.run();
    expect(computer.accumulator).toEqual(200);
    expect(computer.programCounter).toEqual(6);
  });

});
