import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngx-peti-example-source',
  templateUrl: './peti-example-source.component.html',
  styleUrls: ['./peti-example-source.component.scss']
})
export class PetiExampleSourceComponent implements OnInit {
  @Input() program: any;
  @Output() loadClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  load() {
    this.loadClicked.emit(this.program)
  }
}
