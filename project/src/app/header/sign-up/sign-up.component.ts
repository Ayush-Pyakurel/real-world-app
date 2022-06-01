import { Component, OnInit } from '@angular/core';
import {
  EmailValidator,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { FetchApiService } from 'src/app/services/fetch-api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  hide = true;
  constructor(private postApi: FetchApiService, private router: Router, private notification: NotificationService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z0-9]*$")]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*$")
      ]),
    });

  }

  onSubmit() {
   
    let param = {
      user: {
        username: this.signUpForm.get('username')?.value,
        email: this.signUpForm.get('email')?.value,
        password: this.signUpForm.get('password')?.value,
      },
    };
    this.postApi.signUp(param).subscribe((res) => {
      // alert(`Hello ${this.signUpForm.get('username')?.value}`);

      this.notification.showSuccess('signUp successful!')
      this.router.navigate(['/signin']);

    },
    (error)=>{
      this.notification.showError('signUp failed');
    });
    // this.signUpForm.get('username')?.value;
  }
}
