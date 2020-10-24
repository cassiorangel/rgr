import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API_USERS = `${environment.API}`

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(this.API_USERS)
      .toPromise()
  }
}
