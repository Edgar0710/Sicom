import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TerminosComponent } from './components/terminos/terminos.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: "full",redirectTo:'Login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
