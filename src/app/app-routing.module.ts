import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductosComponent } from './views/productos/productos.component';
import { CategoriasComponent } from './views/categorias/categorias.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ListWallpaperComponent } from './admin/list-wallpaper/list-wallpaper.component';
import { DetailsWallpapperComponent } from './views/details-wallpapper/details-wallpapper.component';
import { LoginComponent } from './user/login/login.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'productos',component:ProductosComponent},
  {path:'categorias',component:CategoriasComponent},
  {path:'user/register',component:RegisterComponent},
  {path:'user/profile',component:ProfileComponent},
  {path:'user/login',component:LoginComponent},
  {path:'admin/list-wall',component:ListWallpaperComponent},
  {path:'wallpapper/:id',component:DetailsWallpapperComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
