import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogosComponent } from './views/jogos/jogos.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './views/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'header',
    component: HeaderComponent

  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path:'', redirectTo:'login', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
