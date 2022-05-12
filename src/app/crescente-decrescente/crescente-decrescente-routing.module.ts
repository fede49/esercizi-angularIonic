import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrescenteDecrescentePage } from './crescente-decrescente.page';

const routes: Routes = [
  {
    path: '',
    component: CrescenteDecrescentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrescenteDecrescentePageRoutingModule {}
