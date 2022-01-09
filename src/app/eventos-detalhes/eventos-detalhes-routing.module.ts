import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosDetalhesPage } from './eventos-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: EventosDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class EventosDetalhesPageRoutingModule {}
