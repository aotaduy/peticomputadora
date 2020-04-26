import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetiExamplesComponent } from './peti-examples/peti-examples.component';
import { PetiDocumentationComponent } from './peti-documentation/peti-documentation.component';
import { PetiExampleSourceComponent } from './peti-example-source/peti-example-source.component';
import {NbCardModule} from '@nebular/theme';
import {ReactiveFormsModule} from '@angular/forms';
import { PetiWelcomeComponent } from './peti-welcome/peti-welcome.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [PetiExamplesComponent, PetiDocumentationComponent, PetiExampleSourceComponent, PetiWelcomeComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NbCardModule,
    RouterModule,
  ],
})
export class PetiDocumentationModule { }
