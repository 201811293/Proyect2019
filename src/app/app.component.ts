import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'Proyect2019';
    
  onUpload(e){
    console.log('subir', e.target.files[0]);
  }
}

