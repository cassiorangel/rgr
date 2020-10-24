import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  usersList: any;

  constructor(
    private usersSrvice: UsersService
  ) { }

  ngOnInit(): void {
    this.listUsers();
  }
  public listUsers() {
    this.usersSrvice.getUsers()
      .then((res: any) => {
        this.usersList = res;
        console.log(res)
      })
      .catch((error) => {
        console.log("Promise rejected with " + JSON.stringify(error.message));
      });
  }

  public maisDetales(id) {
    console.log(id)
  }
}
