import { TabsPage } from './../tabs/tabs.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocaisEventosPageRoutingModule } from './locais-eventos-routing.module';

import { LocaisEventosPage } from './locais-eventos.page';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserModule,
    LocaisEventosPageRoutingModule
  ],
  declarations: []
})
export class LocaisEventosPageModule {}
