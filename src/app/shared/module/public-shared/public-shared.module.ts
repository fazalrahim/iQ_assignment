import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponent } from '@app/shared/component/common/common.component';
import { BlogPageComponent } from '@app/blog/blog-page/blog-page.component';

/** 
 The private shared module's purpose is to initilize OR import those modules, components which is going to
 used as a generic like common Module, Matrial module.
  */
@NgModule({
    declarations: [
        CommonComponent,
        BlogPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        CommonComponent,
        BlogPageComponent
    ]
})
export class PublicSharedModule { }
