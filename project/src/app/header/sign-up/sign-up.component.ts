import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchApiService } from 'src/app/services/fetch-api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(private postApi: FetchApiService, private router: Router) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    let param = {
      user: {
        username: this.signUpForm.get('username')?.value,
        email: this.signUpForm.get('email')?.value,
        password: this.signUpForm.get('password')?.value,
      },
    };
    this.postApi.signUp(param).subscribe((res) => {
      alert(`Hello ${this.signUpForm.get('username')?.value}`);

      this.router.navigate(['/signin']);
      // console.log(res);
    });
    // this.signUpForm.get('username')?.value;
  }
}
