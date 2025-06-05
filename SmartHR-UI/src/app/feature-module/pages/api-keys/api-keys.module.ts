import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiKeysRoutingModule } from './api-keys-routing.module';
import { ApiKeysComponent } from './api-keys.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';

@NgModule({
  declarations: [
    ApiKeysComponent
  ],
  imports: [
    CommonModule,
    ApiKeysRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class ApiKeysModule { }
