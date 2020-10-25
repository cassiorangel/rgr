import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

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
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
