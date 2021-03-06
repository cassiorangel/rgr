import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDetailComponent } from 'src/app/shared/modal-detail/modal-detail.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  bsModalRef: BsModalRef;

  usersList: any;

  constructor(
    private usersService: UsersService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.listUsers();
  }
  public listUsers() {
    this.usersService.getUsers()
      .then((res: any) => {
        this.usersList = res;
        console.log(res)
      })
      .catch((error) => {
        console.log("Promise rejected with " + JSON.stringify(error.message));
      });
  }

  public maisDetales(id) {

    this.usersService.detailUser(id).then(res => {
      this.bsModalRef = this.modalService.show(ModalDetailComponent);
      this.bsModalRef.content.name = res['name']
      this.bsModalRef.content.closeBtnName = 'Fechar';
      this.bsModalRef.content.telefone = res['phone'];
      this.bsModalRef.content.empresa = res['company']['name'];
      this.bsModalRef.content.site = res['website'];
      this.bsModalRef.content.geoLat = res['address']['geo']['lat'];
      this.bsModalRef.content.geoLog = res['address']['geo']['lng'];
    })
      .catch((error) => {
        console.log("Promise rejected with " + JSON.stringify(error.message));
      });
  }
}
