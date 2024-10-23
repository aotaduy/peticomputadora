import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AssemblyParser} from '../model/assembly-parser';
import {Instruction} from '../model/instructions/instruction';
import {NbToastrService} from '@nebular/theme';

@Component({
  selector: 'app-assembly-editor',
  templateUrl: './assembly-editor.component.html',
  styleUrls: ['./assembly-editor.component.scss'],
})
export class AssemblyEditorComponent implements OnInit, OnChanges {

  @Input() source;
  @Output() compiled = new EventEmitter<Instruction[]>();
  form: FormGroup;
  error: any;
  lineNumbers: number[];
  accent: any = '';
  defaultCode = `STR 30
STR 30
ADD 12
SUB 10
JUP 08
ADD 13
WRT 00
STP 00
ADD 11
JUI 06
04
01
07
02`;
  constructor(
    private toastrService: NbToastrService,
    private parser: AssemblyParser,
  ) {

    this.createLineNumbers();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      code: new FormControl(this.source || this.defaultCode),
    });
  }

  ngOnChanges() {
    if (this.form) {
      this.form.controls.code.setValue(this.source || this.defaultCode);
    }
  }
  compile() {
    this.error = null;
    this.accent = '';
    try {
      const instructions = this.parser.parse(this.form.value.code);
      this.compiled.emit(instructions);
    } catch (e) {
      this.error = e;
      this.accent = 'danger';
      this.toastrService.danger(this.error.message);
    }
  }

  private createLineNumbers() {
    this.lineNumbers = Array(32).fill(0).map((each, index) => index);
  }
}
