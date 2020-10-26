import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    user: [null, Validators.required],
    password: [null, Validators.required]
  });

  get user() {
    return this.profileForm.get('user');
  }

  get password() {
    return this.profileForm.get('password');
  }

  login() {
    console.log(this.profileForm.value);
    this.authService.fazerLogin(this.profileForm.value)
  }
}
