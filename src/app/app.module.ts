import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './views/home/home.component';
import { ProductosComponent } from './views/productos/productos.component';
import { CategoriasComponent } from './views/categorias/categorias.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ListWallpaperComponent } from './admin/list-wallpaper/list-wallpaper.component';
import { DetailsWallpapperComponent } from './views/details-wallpapper/details-wallpapper.component';
import { LoginComponent } from './user/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    CategoriasComponent,
    PageNotFoundComponent,
    RegisterComponent,
    ProfileComponent,
    ListWallpaperComponent,
    DetailsWallpapperComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
