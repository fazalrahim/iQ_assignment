import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideMenuRoutingModule } from '@app/side-menu/side-menu-routing.module';
import { SideMenuComponent } from '@app/side-menu/side-menu/side-menu.component';
import { PublicSharedModule } from '@app/shared/module/public-shared/public-shared.module';


@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SideMenuRoutingModule,
    PublicSharedModule
  ]
})
export class SideMenuModule { }
