import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ConfirmPasswordValidatorService } from 'src/app/services/confirm-password-validator.service';
import { FetchApiService } from 'src/app/services/fetch-api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(
    private postApi: FetchApiService,
    private router: Router,
    private toaster: NgToastService,
    private confirmPasswordValidator: ConfirmPasswordValidatorService
  ) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup(
      {
        username: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern(
            /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/
          ),
        ]),
        confirmPassword: new FormControl(null, [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern(
            /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/
          ),
        ]),
      },
      {
        validators: this.confirmPasswordValidator.passwordMatch(
          'password',
          'confirmPassword'
        ),
      }
    );
  }

  get registerFormControl() {
    return this.signUpForm.controls;
  }

  onSubmit() {
    console.log(this.signUpForm);
    let param = {
      user: {
        username: this.signUpForm.get('username')?.value,
        email: this.signUpForm.get('email')?.value,
        password: this.signUpForm.get('password')?.value,
      },
    };
    this.postApi.signUp(param).subscribe(
      (res) => {
        this.toaster.success({
          detail: 'Successful',
          summary: 'New user registerd Successfully!!',
          duration: 4000,
        });
        this.router.navigate(['/signin']);
        // console.log(res);
      },
      (error) => {
        this.toaster.error({
          detail: 'Error Message',
          summary: 'Unable to register new user!!',
          duration: 4000,
        });
      }
    );
    // this.signUpForm.get('username')?.value;
    this.signUpForm.reset();
  }
}
