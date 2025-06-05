import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { BlogCommentsComponent } from './blog-comments/blog-comments.component';
import { BlogTagsComponent } from './blog-tags/blog-tags.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';
import { SharedModule } from '../../../shared/shared-module';
import { BlogModalComponent } from './blog-modal/blog-modal.component';
import { ChipsModule } from 'primeng/chips';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [
    BlogsComponent,
    AllBlogsComponent,
    BlogCommentsComponent,
    BlogTagsComponent,
    BlogCategoriesComponent,
    BlogModalComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SharedModule,
    CustomPaginationModule,
    ChipsModule,
    NgxEditorModule
  ]
})
export class BlogsModule { }
