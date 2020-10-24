import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';


@NgModule({
  declarations: [ListUsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ModalModule.forRoot()
  ]
})
export class UsersModule { }
