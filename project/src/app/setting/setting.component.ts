import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthServiceService } from '../services/auth-service.service';
import { FetchApiService } from '../services/fetch-api.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  settingForm: FormGroup;

  constructor(
    private authService: AuthServiceService,
    private fetchApiService: FetchApiService,
    private toaster: NgToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.settingForms();
  }

  settingForms() {
    this.settingForm = new FormGroup({
      url: new FormControl(''),
      username: new FormControl('', Validators.required),
      bio: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/),
      ]),
    });
  }

  onSubmit() {
    let params = {
      user: {
        email: this.settingForm.get('email')?.value,
        username: this.settingForm.get('username')?.value,
        bio: this.settingForm.get('bio')?.value,
        url: this.settingForm.get('url')?.value,
        token: localStorage.getItem('token'),
        password: this.settingForm.get('password')?.value,
      },
    };
    this.fetchApiService.updateSignedInUser(params).subscribe(
      (response) => {
        this.toaster.success({
          detail: 'Success Message',
          summary: 'User is updated successfully!',
          duration: 3500,
        });
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        this.router.navigate(['/sigin']);
        this.settingForm.reset();
        //console.log(response);
      },
      (error) => {
        this.toaster.success({
          detail: 'Unsuccessful attempt!!',
          summary: 'Unable to update user',
          duration: 3500,
        });
      }
    );
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/sigin']);
    this.settingForm.reset();
  }
}
