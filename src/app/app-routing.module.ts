import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';

const routes: Routes = [
  { path: 'projectdetail/:id', component: ProjectdetailComponent },
  { path: 'home', component: HomeComponent},
  
  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
