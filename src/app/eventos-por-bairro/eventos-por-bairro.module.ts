import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosPorBairroPageRoutingModule } from './eventos-por-bairro-routing.module';

import { EventosPorBairroPage } from './eventos-por-bairro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosPorBairroPageRoutingModule
  ],
  declarations: []
})
export class EventosPorBairroPageModule {}
