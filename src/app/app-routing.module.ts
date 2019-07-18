import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { MobilesComponent } from 'src/app/mobiles/mobiles.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'mobiles',
    component: MobilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
