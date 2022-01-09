import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosDetalhesPage } from './eventos-detalhes/eventos-detalhes.page';
import { EventosPorBairroPage } from './eventos-por-bairro/eventos-por-bairro.page';
import { LocaisEventosPage } from './locais-eventos/locais-eventos.page';
import { Tab1Page } from './tab1/tab1.page';
import { TabsPageModule } from './tabs/tabs.module';



@NgModule({
  declarations: [AppComponent, LocaisEventosPage, EventosDetalhesPage, EventosPorBairroPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: Tab1Page },
      { path: 'home', component: Tab1Page },
      { path: 'eventosdetalhes/:id', component: EventosDetalhesPage },
      { path: 'locaiseventos/:id', component: LocaisEventosPage },
      { path: 'eventosporbairro/:id', component: EventosPorBairroPage },
      { path: 'tabs', component: TabsPageModule },
    ]),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
