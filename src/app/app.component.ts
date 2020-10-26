import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mostrarMenu: boolean = false;

  title = 'rgr';

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(res => this.mostrarMenu = res);
  }

  deslogar() {
    this.authService.logout();
  }

}
