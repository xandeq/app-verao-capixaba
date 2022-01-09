import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosPorBairroPage } from './eventos-por-bairro.page';

const routes: Routes = [
  {
    path: '',
    component: EventosPorBairroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosPorBairroPageRoutingModule {}
