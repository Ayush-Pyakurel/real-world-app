import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/Interface/user';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FetchApiService } from 'src/app/services/fetch-api.service';
import { NgToastService } from 'ng-angular-popup';
import { ConfirmPasswordValidatorService } from 'src/app/services/confirm-password-validator.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  userLoginData!: any;
  currentUser: User;
  errorMessage: any;

  constructor(
    private postSignIn: FetchApiService,
    private router: Router,
    //private authService: AuthServiceService,
    private toaster: NgToastService,
    private confirmPasswordValidator: ConfirmPasswordValidatorService
  ) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup(
      {
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

  onSubmit() {
    //console.log(this.signInForm.value);
    let param = {
      user: {
        email: this.signInForm.get('email')?.value,
        password: this.signInForm.get('password')?.value,
      },
    };

    // this.postSignIn.signIn(param).pipe(tap(vare=>console.log(vare))).subscribe((res) => {
    this.postSignIn.signIn(param).subscribe(
      (res) => {
        //console.log(res.token);
        localStorage.setItem('token', res.user.token);
        localStorage.setItem('currentUser', res.user.username);
        this.toaster.success({
          detail: 'Success Message',
          summary: `Hello ${res.user.username}, you are successfully logged in!`,
          duration: 5000,
          position: 'buttom-right',
        });
        //console.log(res.user.username);

        this.signInForm.reset();
        this.router.navigate(['/home']);
      },
      (error) => {
        this.toaster.error({
          detail: 'Error',
          summary: `${error}`,
          duration: 3500,
        });
      }
    );
  }

  // mustMatch(controlName: string, matchingControlName: string): boolean {
  //   return (fromGroup: FormGroup) =>{
  //     const control = fromGroup.controls[controlName]
  //     const matchinControl = fromGroup.controls[matchingControlName]
  //     if(matchingControlName.);
  //     )
  //   }
  // }
}
