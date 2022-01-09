import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventosDetalhesPageRoutingModule } from './eventos-detalhes-routing.module';
import { EventosDetalhesPage } from './eventos-detalhes.page';

@NgModule({
  providers: [],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EventosDetalhesPageRoutingModule
  ],
  declarations: []
})
export class EventosDetalhesPageModule {}
