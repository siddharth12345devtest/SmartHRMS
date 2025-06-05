import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyComponent } from './policy.component';
import { SharedModule } from '../../../../shared/shared-module';
import { CustomPaginationModule } from '../../../../shared/custom-pagination/custom-pagination.module';


@NgModule({
  declarations: [
    PolicyComponent
  ],
  imports: [
    CommonModule,
    PolicyRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class PolicyModule { }
