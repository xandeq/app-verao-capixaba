import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'eventos-detalhes',
    loadChildren: () =>
      import('./eventos-detalhes/eventos-detalhes.module').then(
        (m) => m.EventosDetalhesPageModule
      ),
  },
  {
    path: 'locais-eventos',
    loadChildren: () => import('./locais-eventos/locais-eventos.module').then( m => m.LocaisEventosPageModule)
  },
  {
    path: 'eventos-por-bairro',
    loadChildren: () => import('./eventos-por-bairro/eventos-por-bairro.module').then( m => m.EventosPorBairroPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
