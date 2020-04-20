import {Component, Input, OnInit} from '@angular/core';
import {ExecutionContextState} from "../model/execution-context-state";

@Component({
  selector: 'ngx-execution-display',
  templateUrl: './execution-display.component.html',
  styleUrls: ['./execution-display.component.scss']
})
export class ExecutionDisplayComponent implements OnInit {

  @Input() executions: ExecutionContextState[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
