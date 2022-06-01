import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ErrorInterceptor } from 'src/app/error.interceptor';
import { NotificationService } from 'src/app/notification.service';
import { FetchApiService } from 'src/app/services/fetch-api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  userLoginData!: any;

  constructor(private postSignIn: FetchApiService, private router: Router, private notification: NotificationService) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
    this.logout();
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
    this.postSignIn.signIn(param).subscribe((res) => {
      console.log('username', res.user.username)
      localStorage.setItem('token', res.user.token);
      this.notification.showSuccess('login successful')
      this.router.navigate(['/home']);
    },
    (error)=>{
      this.notification.showError('invalid email or password')
    }
    
    );
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])


  }

}
