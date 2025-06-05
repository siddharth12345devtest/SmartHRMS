import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialsComponent } from './testimonials.component';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';
import { SharedModule } from '../../../shared/shared-module';


@NgModule({
  declarations: [
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    TestimonialsRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class TestimonialsModule { }
