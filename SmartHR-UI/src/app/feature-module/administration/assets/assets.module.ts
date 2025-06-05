import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsRoutingModule } from './assets-routing.module';
import { AssetsComponent } from './assets.component';
import { AssetCategoriesComponent } from './asset-categories/asset-categories.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';
import { AssetModalComponent } from './asset-modal/asset-modal.component';


@NgModule({
  declarations: [
    AssetsComponent,
    AssetCategoriesComponent,
    AssetListComponent,
    AssetModalComponent
  ],
  imports: [
    CommonModule,
    AssetsRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class AssetsModule { }
