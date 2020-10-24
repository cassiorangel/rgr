import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  { 
    path: '',   
    redirectTo: '/user', 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
