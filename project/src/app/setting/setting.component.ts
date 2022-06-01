import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { FetchApiService } from '../services/fetch-api.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  updateForm!: FormGroup;

  constructor(private notification: NotificationService,private fetchApiService:FetchApiService,private router:Router) { }

  ngOnInit(): void {
    this.updateForm=new FormGroup({
      image:new FormControl(''),
      userName:new FormControl('',[Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z0-9]*$")]),
      bio:new FormControl(''),
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[
        Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*$")]),
    });
  }
  onSubmit(){
    let param={
      user:{
        email:this.updateForm.get('email')?.value,
        username:this.updateForm.get('username')?.value,
        password:this.updateForm.get('password')?.value,
      
      }
    }
    this.fetchApiService.updateUser(param).subscribe((res)=>{
   


      this.router.navigate(['/profile'])
    },(error)=>{
      this.notification.showError('Failed to update password')
    })
  }

}

