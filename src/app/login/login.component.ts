import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserInterface } from '../register/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private roles: string[] = [];
  loginForm!: FormGroup;
  http = inject(HttpClient);

  constructor(private router: Router,
    private authService: AuthService
  ) {
    this.initForms();
  }

  ngOnInit(): void {
    var token = localStorage.getItem('token');
    if(token) {
      this.router.navigateByUrl('/home');
    }
  }

  initForms() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  getUserRoles(): string[] {
    return this.roles;
  }

  submit() {
    this.http
      .post<{ user: UserInterface }>('https://api.realworld.io/api/users/login', {
        user: this.loginForm.getRawValue(),
      })
      .subscribe((response) => {
        console.log(response);
        localStorage.setItem('token', response.user.token);
        let roles: string[] = [];
        if (response.user.email === 'kt@gmail.com') {
          roles = ['Admin'];
        } else if (response.user.email === 'kru@gmail.com') {
          roles = ['SuperAdmin'];
        }
        this.authService.setRoles(roles);
        this.router.navigate(['/home']);
      });
  }

  get Email() {
    return this.loginForm.get('email') as FormControl;
  }

  get Password() {
    return this.loginForm.get('password') as FormControl;
  }
}
