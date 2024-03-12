import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from '@app/home/home-routing.module';
import { HomeComponent } from './home-page/home.component';
import { PublicSharedModule } from '@app/shared/module/public-shared/public-shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PublicSharedModule
  ]
})
export class HomeModule { }
