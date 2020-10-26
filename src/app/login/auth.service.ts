import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  fazerLogin(usuario: User) {
    if (usuario.user === 'Sincere@april.biz' && usuario.password === '1234' || usuario.user === 'hildegard.org' && usuario.password === '1234') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('token', usuario.user);
      return this.router.navigate(['/user']);
    }
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    return alert('Usuário ou senha invalida')
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  logout(): void {
   
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    window.location.reload();
  }
}
