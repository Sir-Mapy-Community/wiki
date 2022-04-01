import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowToBuyRoutingModule } from './how-to-buy-routing.module';
import { HowToBuyComponent } from './how-to-buy.component';


@NgModule({
  declarations: [
    HowToBuyComponent
  ],
  imports: [
    CommonModule,
    HowToBuyRoutingModule
  ]
})
export class HowToBuyModule { }
