import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'pagina', loadChildren: './pagina/pagina.module#PaginaPageModule' },
  { path: 'pagina', loadChildren: './pagina/pagina.module#PaginaPageModule' },
  { path: 'accion', loadChildren: './accion/accion.module#AccionPageModule' },
  { path: 'terror', loadChildren: './terror/terror.module#TerrorPageModule' },
  { path: 'ficcion', loadChildren: './ficcion/ficcion.module#FiccionPageModule' },
  { path: 'otros', loadChildren: './otros/otros.module#OtrosPageModule' },  { path: 'avengers', loadChildren: './avengers/avengers.module#AvengersPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
