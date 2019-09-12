import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {AngularFireStorage } from '@angular/fire/storage';
import {AuthService} from '../../services/auth.service'
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService, private storage:AngularFireStorage) { }
  
  @ViewChild('imageUser',{static:true}) inputImageUser: ElementRef;
  
  public email: string="";
  public password: string="";


  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  ngOnInit() {
  }
  onAddUser(){
    this.authService.registerUser(this.email,this.password)
    .then((res)=>{
      this.authService.isAuth().subscribe(user =>{
        if(user){
          user.updateProfile({
            displayName: '',
            photoURL:this.inputImageUser.nativeElement.value
          }).then(function(){
            console.log('user UPDATE');
          }).catch(function(error){
            console.log('eeror',error);
          });
        }
      });
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
    const id= Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref= this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file)
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(()=> this.urlImage = ref.getDownloadURL() )).subscribe();

  }
}
