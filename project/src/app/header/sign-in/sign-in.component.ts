import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchApiService } from 'src/app/services/fetch-api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  userLoginData!: any;

  constructor(private postSignIn: FetchApiService, private router: Router) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  onSubmit() {
    console.log(this.signInForm.value);
    let param = {
      user: {
        email: this.signInForm.get('email')?.value,
        password: this.signInForm.get('password')?.value,
      },
    };
    this.postSignIn.signIn(param).subscribe((res) => {
      this.router.navigate(['/user']);
    });
  }
}
