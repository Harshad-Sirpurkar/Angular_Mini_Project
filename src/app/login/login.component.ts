import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private fb:FormBuilder,private router:Router){ }
  loginForm:FormGroup;
  ngOnInit():void
  {
    this.loginForm=this.fb.group({
      username:[],
      password:[]
    })
  }
   onLogin()
   {
      if(this.loginForm.controls['username'].value=='admin' && this.loginForm.controls['password'].value=='admin123')
      {
        this.router.navigateByUrl('/admin')
      }
      else{
        alert('Enter Valid Details...!')
      }
   }
}
