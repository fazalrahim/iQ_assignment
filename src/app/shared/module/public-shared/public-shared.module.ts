import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

/** 
 The private shared module's purpose is to initilize OR import those modules, components which is going to
 used as a generic like common Module, Matrial module.
  */
@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [
        MaterialModule
    ]
})
export class PublicSharedModule { }
