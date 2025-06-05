import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './assets.component';
import { AssetCategoriesComponent } from './asset-categories/asset-categories.component';
import { AssetListComponent } from './asset-list/asset-list.component';

const routes: Routes = [
  { path: '', 
    component: AssetsComponent,
    children:[
      {path:'asset-list',component:AssetListComponent},
      {path:'asset-categories',component:AssetCategoriesComponent},
    ]
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
