import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UglyNumberPageRoutingModule } from './ugly-number-routing.module';

import { UglyNumberPage } from './ugly-number.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UglyNumberPageRoutingModule
  ],
  declarations: [UglyNumberPage]
})
export class UglyNumberPageModule {}
