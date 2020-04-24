import { Component } from '@angular/core';
import {Instruction} from '../model/instructions/instruction';
import {ExecutionContextState} from "../model/execution-context-state";
import {$e} from "codelyzer/angular/styles/chars";
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-peti-computer-ide',
  templateUrl: './peti-computer-ide.component.html',
  styleUrls: ['./peti-computer-ide.component.scss'],
})
export class PetiComputerIdeComponent  {

  instructions: Instruction[];
  isEditing = true;
  executions: ExecutionContextState[] = []
  loadedProgram: any;
  loadedSource: string
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation()
    if (navigation && navigation.extras && navigation.extras.state) {
      this.loadedProgram = navigation.extras.state.program;
      this.loadedSource = this.loadedProgram.program;
    }
  }


  ngOnInit() {

  }
  setInstructions($event: Instruction[]) {
    this.instructions = $event;
    this.isEditing = false;
  }

  edit() {
    this.isEditing = true;
  }

  getExecutions() {

  }

  setExecutions($event: ExecutionContextState[]) {
    this.executions = $event;
  }
}
