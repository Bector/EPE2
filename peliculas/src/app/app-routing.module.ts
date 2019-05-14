import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'pagina', loadChildren: './pagina/pagina.module#PaginaPageModule' },
  { path: 'pagina', loadChildren: './pagina/pagina.module#PaginaPageModule' },
  { path: 'accion', loadChildren: './accion/accion.module#AccionPageModule' },
  { path: 'terror', loadChildren: './terror/terror.module#TerrorPageModule' },
  { path: 'ficcion', loadChildren: './ficcion/ficcion.module#FiccionPageModule' },
  { path: 'otros', loadChildren: './otros/otros.module#OtrosPageModule' },  { path: 'avengers', loadChildren: './avengers/avengers.module#AvengersPageModule' },
  { path: 'thor', loadChildren: './thor/thor.module#ThorPageModule' },
  { path: 'pantera', loadChildren: './pantera/pantera.module#PanteraPageModule' },
  { path: 'kingsman', loadChildren: './kingsman/kingsman.module#KingsmanPageModule' },
  { path: 'hormiga', loadChildren: './hormiga/hormiga.module#HormigaPageModule' },
  { path: 'dbs', loadChildren: './dbs/dbs.module#DbsPageModule' },
  { path: 'silencio', loadChildren: './silencio/silencio.module#SilencioPageModule' },
  { path: 'monja', loadChildren: './monja/monja.module#MonjaPageModule' },
  { path: 'ouija', loadChildren: './ouija/ouija.module#OuijaPageModule' },
  { path: 'conjuro', loadChildren: './conjuro/conjuro.module#ConjuroPageModule' },
  { path: 'escalofrios', loadChildren: './escalofrios/escalofrios.module#EscalofriosPageModule' },
  { path: 'ready', loadChildren: './ready/ready.module#ReadyPageModule' },
  { path: 'star', loadChildren: './star/star.module#StarPageModule' },
  { path: 'harry', loadChildren: './harry/harry.module#HarryPageModule' },
  { path: 'me', loadChildren: './me/me.module#MePageModule' },
  { path: 'titanic', loadChildren: './titanic/titanic.module#TitanicPageModule' },
  { path: 'bird', loadChildren: './bird/bird.module#BirdPageModule' },
  { path: 'roma', loadChildren: './roma/roma.module#RomaPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
