import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserInterface } from './user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  http = inject(HttpClient);
  constructor(private router:Router) {
    this.initForms();
  }

  initForms() {
    this.registerForm = new FormGroup(
      {
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*'),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*'),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phoneNumber: new FormControl('', [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern('[0-9]*'),
        ]),
        gender: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        repeatPassword: new FormControl('', [Validators.required]),
      },
      {
        validators: this.confirmPasswordValidator
      }
    );
  }

  // confirmPasswordValidator(controlName: string, matchingControlName: string): ValidatorFn {
  //   return (formGroup: AbstractControl): ValidationErrors | null => {
  //     const control = formGroup.get(controlName);
  //     const matchingControl = formGroup.get(matchingControlName);

  //     if (!control || !matchingControl) {
  //       return null;
  //     }

  //     if (matchingControl.errors && !matchingControl.errors['confirmPasswordValidator']) {
  //       return null;
  //     }

  //     if (control.value !== matchingControl.value) {
  //       matchingControl.setErrors({ confirmPasswordValidator: true });
  //     } else {
  //       matchingControl.setErrors(null);
  //     }

  //     return null;
  //   };
  // }

  confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('repeatPassword')?.value;

    if (password !== confirmPassword) {
      control.get('repeatPassword')?.setErrors({ confirmPasswordValidator: true });
      return { confirmPasswordValidator: true };
    }

    control.get('repeatPassword')?.setErrors(null);
    return null;
  }

  ngOnInit(): void {}

  get FirstName(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }
  get LastName(): FormControl {
    return this.registerForm.get('lastName') as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get PhoneNumber(): FormControl {
    return this.registerForm.get('phoneNumber') as FormControl;
  }
  get Gender(): FormControl {
    return this.registerForm.get('gender') as FormControl;
  }
  get Password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
  get RepeatPassword(): FormControl {
    return this.registerForm.get('repeatPassword') as FormControl;
  }

  submit() {
    this.http.post<{user: UserInterface}>('https://api.realworld.io/api/users', {user: this.registerForm.getRawValue()})
    .subscribe((response)=> {
      console.log(response);
      // localStorage.setItem('token', response.user.token);
      this.router.navigateByUrl('/login');
    })
  }
}
