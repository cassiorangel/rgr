import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailUsersComponent } from './detail-users/detail-users.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {
    path: '',
    component: ListUsersComponent
  },
  {
    path: 'detalhe-user',
    component: DetailUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
