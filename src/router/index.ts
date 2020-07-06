import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';
import { CreateComponent } from '../create/create.component';
import { AppComponent } from 'src/app/app.component';
import { ProductListComponent } from 'src/product-list/product-list.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'create', component: CreateComponent },
  { path: 'list', component: ProductListComponent },
  { path: '*', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
