import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmdinblogComponent } from './amdinblog/amdinblog.component';

import { LoginComponent } from './auth/login/login.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { PostComponent } from './blog/post/post.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "blog", component: BlogPageComponent },
  { path: "blog/my-best-blog", component: PostComponent },
  { path: "admin/blog", component: AmdinblogComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
