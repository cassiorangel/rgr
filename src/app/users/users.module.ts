import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { DetailUsersComponent } from './detail-users/detail-users.component';


@NgModule({
  declarations: [ListUsersComponent, DetailUsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
