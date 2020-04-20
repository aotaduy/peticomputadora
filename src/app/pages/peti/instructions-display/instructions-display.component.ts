import {Component, Input, OnInit} from '@angular/core';
import {Instruction} from '../model/instructions/instruction';

@Component({
  selector: 'app-instructions-display',
  templateUrl: './instructions-display.component.html',
  styleUrls: ['./instructions-display.component.scss'],
})
export class InstructionsDisplayComponent implements OnInit {

  @Input() instructions: Instruction[];
  @Input() line;
  constructor() { }

  ngOnInit(): void {
  }

}
