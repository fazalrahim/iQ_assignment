import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideMenuComponent } from '@app/side-menu/side-menu/side-menu.component';

const childModules: any = [
  /**
   This is side menu module, here we can intilize all modules to process the lazy loading.
   Lazy loading help to load only navigated related module. It makes increase the perofrmance.
   */
   {
    path: 'home',
    loadChildren: () => import('@app/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'blog',
    loadChildren: () => import('@app/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path:'user',
    loadChildren: () => import('@app/user/user.module').then(m => m.UserModule)
  }
]

const routes: Routes = [
  {
    path: '',
    component: SideMenuComponent,
    children: [...childModules]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideMenuRoutingModule { }
