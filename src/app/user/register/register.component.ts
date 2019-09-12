import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import {AuthService} from '../../services/auth.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }
  public email: string="";
  public password: string="";
  ngOnInit() {
  }
  onAddUser(){
    this.authService.registerUser(this.email,this.password)
    .then((res)=>{
      this.router.navigate(['/']);
    }).catch(err=> console.log('err',err.message));
  }

  onLogin(): void{
    this.authService.loginEmailUser(this.email, this.password)
    .then((res)=>{
      this.onLoginRedirect();
    }).catch(err=>console.log('err',err.message));
  }

  onLoginGoogle(): void{
    this.authService.loginGoogleUser()
    .then((res)=>{
      this.onLoginRedirect();
    }).catch(err=>console.log('err',err.message));
  }
  onLoginFacebook(): void{
    this.authService.loginFacebookUser()
    .then((res)=>{
      this.onLoginRedirect();
    }).catch(err=>console.log('err',err.message));
  }
  onLoginRedirect(): void{
    this.router.navigate(['/'])
  }


  onUpload(e){
    console.log('subir',e.target.files[0]);
  }
}
