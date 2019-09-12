import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,private afsAuth: AngularFireAuth, private router:Router) { }

  public isLogged: boolean = false;

  ngOnInit() {
    this.getCurrentUser();
  }

    getCurrentUser(){
      this.authService.isAuth().subscribe( auth =>{
        if(auth){
          console.log('user logged')
          this.isLogged= true;
        } else {
          console.log('NOT user logged')
          this.isLogged= false;
        }
      })
    }
    onLogout(){
      this.afsAuth.auth.signOut();
      this.router.navigate(['/'])
    }
}
