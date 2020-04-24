import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {PetiComputerIdeComponent} from './peti/peti-computer-ide/peti-computer-ide.component';
import {PetiExamplesComponent} from "./peti-documentation/peti-examples/peti-examples.component";
import {PetiWelcomeComponent} from "./peti-documentation/peti-welcome/peti-welcome.component";

const routes: Routes = [
  {
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'bienvenidos',
      component: PetiWelcomeComponent,
    },
    {
      path: 'peticomputadora',
      component: PetiComputerIdeComponent,
    },
    {
      path: 'ejemplos',
      component: PetiExamplesComponent,
    },
    {
      path: '',
      redirectTo: 'bienvenidos',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
