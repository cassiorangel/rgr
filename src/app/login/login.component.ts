import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  profileForm = this.fb.group({
    user: [null],
    password: [null]
  });

  login() {
    console.log(this.profileForm.value);
    this.authService.fazerLogin(this.profileForm.value)
  }
}
