import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
 
const appRoutes:Routes=[
  {
    path:'',component:HomeComponent
  },
  {
    path:'movie',loadChildren:'./movies/movie.module#MovieModule'
  },
  {
    path:'',redirectTo:'home',pathMatch:'full'
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
