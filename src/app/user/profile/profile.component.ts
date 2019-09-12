import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService:AuthService) { }
  user:User ={
    name:'',
    email:'',
    photoUrl:'',
    roles: {}
  };

  public providerId: string = 'null';
  ngOnInit() {
    this.authService.isAuth().subscribe(user=>{
      if(user){
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.providerId = user.providerData[0].providerId;
        console.log('user',user)
      }
    })
    }

}
