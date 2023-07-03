import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SignupComponent } from './signup/signup.component';
import {LoginComponent} from "./login/login.component";
import { ProductSectionComponent } from './product-section/product-section.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  
  { path: '', component: IndexComponent },
  { path: 'signup', component: SignupComponent },
  {path:'login', component: LoginComponent},
  { path: 'products', component: ProductsComponent },
  { path: '**', component: IndexComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
