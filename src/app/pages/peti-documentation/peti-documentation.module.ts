import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetiExamplesComponent } from './peti-examples/peti-examples.component';
import { PetiDocumentationComponent } from './peti-documentation/peti-documentation.component';
import { PetiExampleSourceComponent } from './peti-example-source/peti-example-source.component';
import {NbCardModule} from '@nebular/theme';
import {ReactiveFormsModule} from '@angular/forms';
import { PetiWelcomeComponent } from './peti-welcome/peti-welcome.component';
import {RouterModule} from '@angular/router';
import {HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions} from 'ngx-highlightjs';



@NgModule({
  declarations: [
    PetiExamplesComponent,
    PetiDocumentationComponent,
    PetiExampleSourceComponent,
    PetiWelcomeComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NbCardModule,
    RouterModule,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
      },
    },
  ],
})
export class PetiDocumentationModule { }
