import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from '../router';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';
import { CreateComponent } from '../create/create.component';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductListComponent } from '../product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    CreateComponent,
    PokemonCardComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
