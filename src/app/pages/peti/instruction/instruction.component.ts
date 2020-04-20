import {Component, Input, OnInit} from '@angular/core';
import {Instruction} from '../model/instructions/instruction';

@Component({
  selector: 'ngx-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss'],
})
export class InstructionComponent implements OnInit {
  @Input() instruction: Instruction;

  constructor() { }

  ngOnInit(): void {
  }

}
