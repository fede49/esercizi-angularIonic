import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UglyNumberPage } from './ugly-number.page';

const routes: Routes = [
  {
    path: '',
    component: UglyNumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UglyNumberPageRoutingModule {}
