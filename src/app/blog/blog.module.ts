import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from '@app/blog/blog-routing.module';
import { BlogPageComponent } from '@app/blog/blog-page/blog-page.component';


@NgModule({
  declarations: [BlogPageComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
