import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainRoutingModule } from './domain-routing.module';
import { DomainComponent } from './domain.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';


@NgModule({
  declarations: [
    DomainComponent
  ],
  imports: [
    CommonModule,
    DomainRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class DomainModule { }
