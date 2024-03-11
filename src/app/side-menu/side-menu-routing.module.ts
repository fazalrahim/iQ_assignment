import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /**
   This is side menu module, here we can intilize all modules to process the lazy loading.
   Lazy loading help to load only navigated related module. It makes increase the perofrmance.
   */
  {
    path: 'home',
    loadChildren: () => import('@app/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideMenuRoutingModule { }
