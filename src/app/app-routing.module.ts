import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  /** 
    We can add modules to perform the lazy loading, we can add more module OR using 'authGuard' which will be role base
    which helps to minimize the load of the application.
   */
  {
    path: 'main',
    loadChildren: () => import('@app/side-menu/side-menu.module').then(m => m.SideMenuModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
