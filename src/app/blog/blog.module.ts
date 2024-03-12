import { NgModule } from '@angular/core';

import { BlogRoutingModule } from '@app/blog/blog-routing.module';
import { BlogPageComponent } from '@app/blog/blog-page/blog-page.component';
import { PublicSharedModule } from '@app/shared/module/public-shared/public-shared.module';


@NgModule({
  declarations: [],
  imports: [
    PublicSharedModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
