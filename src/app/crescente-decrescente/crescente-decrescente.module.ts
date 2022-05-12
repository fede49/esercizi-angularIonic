import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrescenteDecrescentePageRoutingModule } from './crescente-decrescente-routing.module';

import { CrescenteDecrescentePage } from './crescente-decrescente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrescenteDecrescentePageRoutingModule
  ],
  declarations: [CrescenteDecrescentePage]
})
export class CrescenteDecrescentePageModule {}
