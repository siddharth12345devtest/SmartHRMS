import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { BlogTagsComponent } from './blog-tags/blog-tags.component';
import { BlogCommentsComponent } from './blog-comments/blog-comments.component';

const routes: Routes = [
  { path: '', 
    component: BlogsComponent,
    children:[
      {path:'all-blogs',component:AllBlogsComponent},
      {path:'blog-categories',component:BlogCategoriesComponent},
      {path:'blog-tags',component:BlogTagsComponent},
      {path:'blog-comments',component:BlogCommentsComponent},
    ]
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
