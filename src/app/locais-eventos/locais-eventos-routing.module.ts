import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocaisEventosPage } from './locais-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: LocaisEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocaisEventosPageRoutingModule {}
