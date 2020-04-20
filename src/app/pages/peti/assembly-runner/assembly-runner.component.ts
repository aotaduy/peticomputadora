import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Instruction} from '../model/instructions/instruction';
import {AssemblyParser} from '../model/assembly-parser';
import {ControlUnit} from '../model/control-unit';
import {ExecutionContextState} from "../model/execution-context-state";

function input() {

}

@Component({
  selector: 'ngx-assembly-runner',
  templateUrl: './assembly-runner.component.html',
  styleUrls: ['./assembly-runner.component.scss'],
})
export class AssemblyRunnerComponent implements OnInit {

  @Input() instructions: Instruction[];
  @Input() delay = 500;
  @Output() edit = new EventEmitter();
  @Output() executions = new EventEmitter<ExecutionContextState[]>();
  stopRunning;
  controlUnit: ControlUnit;
  programCounter: number;
   lastInstruction: any;
  constructor(
    private parser: AssemblyParser,
  ) { }

  ngOnInit(): void {
  }

  runProgram(){
    this.loadProgram();
    this.stopRunning = setInterval( () => this.runInstruction(), this.delay);
  }

  loadProgram() {
    this.controlUnit = new ControlUnit();
    this.controlUnit.load(this.instructions);
  }

  runInstruction() {
    if (this.controlUnit.isHalted()) {
      clearInterval(this.stopRunning);
    }
    this.controlUnit.runInstruction();
    this.lastInstruction = this.controlUnit.decodedInstruction;
    this.programCounter = this.controlUnit.programCounter;
    this.executions.emit(this.controlUnit.executions)
  }

  goEdit() {
    this.stop()
    this.edit.emit();
  }

  stop() {
    clearInterval(this.stopRunning);
    this.executions.emit(this.controlUnit.executions)
  }
}
