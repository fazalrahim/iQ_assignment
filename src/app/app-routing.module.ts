import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '@app/error-page/error-page.component';

const routes: Routes = [  
  /**
   In case user only enter the url with empty path ~~ (inside the path we set the component route name which is load when it found in URL)
   It'll redirect to default path.
   */
   { path: '', redirectTo: '/main/home', pathMatch: 'full' },
  /** 
    We can add modules to perform the lazy loading, we can add more module OR using 'authGuard' which will be role base
    which helps to minimize the load of the application.
   */
  {
    path: 'main',
    loadChildren: () => import('@app/side-menu/side-menu.module').then(m => m.SideMenuModule)
  },
  /** In case the URL is incorrect then it'll redirect to error page automatically */
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
