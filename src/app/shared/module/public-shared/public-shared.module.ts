import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponent } from '@app/shared/component/common/common.component';

/** 
 The private shared module's purpose is to initilize OR import those modules, components which is going to
 used as a generic like common Module, Matrial module.
  */
@NgModule({
    declarations: [
        CommonComponent
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
        CommonComponent
    ]
})
export class PublicSharedModule { }
