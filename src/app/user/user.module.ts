import { NgModule } from '@angular/core';

import { UserRoutingModule } from '@app/user/user-routing.module';
import { UserTabularComponent } from '@app/user/user-tabular/user-tabular.component';
import { UserPageComponent } from '@app/user/user-page/user-page.component';
import { PublicSharedModule } from '@app/shared/module/public-shared/public-shared.module';
import { UserCardComponent } from '@app/user/user-card/user-card.component';


@NgModule({
  declarations: [
    UserTabularComponent,
    UserPageComponent,
    UserCardComponent
  ],
  imports: [
    UserRoutingModule,
    PublicSharedModule
  ]
})
export class UserModule { }
