import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** 
  Material Controls Module, We have to import the module here, add their name into import List
*/
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [],
    /**
     We have to careful to import the 'Material Modules', because unnecessary import the modules will effect on performance.
     */
    imports: [
        CommonModule,
        MatIconModule
    ],
    /** 
     The purpose of the seperate module to declare at one location & ease for usage within the application. If we declare 
    the module name inside the 'exports' List then it'll be asscible outside the module OR within the application. 
    */
    exports: [
        MatIconModule
    ]
})
export class MaterialModule { }