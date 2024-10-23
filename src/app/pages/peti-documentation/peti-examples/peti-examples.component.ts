import { Component, OnInit } from '@angular/core';
import * as examplePrograms from '../example-programs';
import {Router} from '@angular/router';
@Component({
  selector: 'ngx-peti-examples',
  templateUrl: './peti-examples.component.html',
  styleUrls: ['./peti-examples.component.scss'],
})
export class PetiExamplesComponent implements OnInit {

  programs = Object.values(examplePrograms);
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  openIde(program) {
    this.router.navigate(['/peticomputadora'], {state: {program}});
  }
}
