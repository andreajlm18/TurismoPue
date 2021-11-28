import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DondeIrComponent } from './donde-ir/donde-ir.component';
import { FestividadesComponent } from './festividades/festividades.component';
import { InfoComponent } from './info/info.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'visita', component: DondeIrComponent },
  { path: 'info', component: InfoComponent },
  { path: 'festividades', component: FestividadesComponent },
  { path: 'informacion/:id', component: InfoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
