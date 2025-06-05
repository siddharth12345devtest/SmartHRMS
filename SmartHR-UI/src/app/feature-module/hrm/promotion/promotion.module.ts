import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionRoutingModule } from './promotion-routing.module';
import { PromotionComponent } from './promotion.component';

import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';
import { SharedModule } from '../../../shared/shared-module';


@NgModule({
  declarations: [
    PromotionComponent
  ],
  imports: [
    CommonModule,
    PromotionRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class PromotionModule { }
