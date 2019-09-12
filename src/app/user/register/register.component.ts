import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {AngularFireStorage } from '@angular/fire/storage';
import {AuthService} from '../../services/auth.service'
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService, private storage:AngularFireStorage) { }
  
  @ViewChild('imageUser',{static:true}) inputImageUser: ElementRef;
  



  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  ngOnInit() {
  }
  onAddUser(form: NgForm){
    
    const name = form.value.name;
    const password = form.value.password;
    const email = form.value.email;

    this.authService.registerUser(email,password)
    .then((res)=>{
      this.authService.isAuth().subscribe(user =>{
        if(user){
          user.updateProfile({
            displayName: name,
            photoURL:this.inputImageUser.nativeElement.value
          }).then(function(){
            console.log('user UPDATE');
            console.log('user',name);
          }).catch(function(error){
            console.log('eeror',error);
          });
        }
      });
      this.router.navigate(['/']);
    }).catch(err=> console.log('err',err.message));
  }

  onLogin(form: NgForm): void{
    const password = form.value.password;
    const email = form.value.email;

    this.authService.loginEmailUser(email, password)
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
    const id= Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref= this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file)
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(()=> this.urlImage = ref.getDownloadURL() )).subscribe();

  }
}
