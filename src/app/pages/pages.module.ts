import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PetiModule } from './peti/peti.module';
import {PetiDocumentationModule} from './peti-documentation/peti-documentation.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    PetiModule,
    PetiDocumentationModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
