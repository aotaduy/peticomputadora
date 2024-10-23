import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetiComputerIdeComponent } from './peti-computer-ide/peti-computer-ide.component';
import {InstructionsDisplayComponent} from './instructions-display/instructions-display.component';
import {AssemblyEditorComponent} from './assembly-editor/assembly-editor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NbCardModule, NbToastrModule} from '@nebular/theme';
import { AssemblyRunnerComponent } from './assembly-runner/assembly-runner.component';
import { InstructionComponent } from './instruction/instruction.component';
import {AssemblyInstructionsHelpComponent} from './assembly-instructions-help/assembly-instructions-help.component';
import { ExecutionDisplayComponent } from './execution-display/execution-display.component';



@NgModule({
  declarations: [
    PetiComputerIdeComponent,
    InstructionsDisplayComponent,
    AssemblyEditorComponent,
    AssemblyRunnerComponent,
    InstructionComponent,
    AssemblyInstructionsHelpComponent,
    ExecutionDisplayComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NbCardModule,
    NbToastrModule.forRoot(),
  ],
})
export class PetiModule { }
