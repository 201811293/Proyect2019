import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth,
    private router: Router) { }

  registerUser(email:string, pass:string){
    return new Promise((resolve, reject)=>{
      this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData)),
      err=> reject(err);
    })
  }
  loginEmailUser(email:string, pass:string){
    return new Promise((resolve, reject) =>{
      this.afsAuth.auth.signInWithEmailAndPassword(email,pass)
      .then(userData => resolve(userData),
      err => reject(err)
      );
    })
  }

  loginFacebookUser(){
    return this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    
  }
  loginGoogleUser(){
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.router.navigate(['/'])
  }
  logoutUser(){
    return this.afsAuth.auth.signOut();
  }

  isAuth(){
    return this.afsAuth.authState.pipe(map(auth=> auth));
  }
}