import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CocktailService } from './app.cocktail.service'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//Filter
import { SearchFilter } from "./common-filter/filter";


@NgModule({
  declarations: [
    AppComponent,
    SearchFilter
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule    
  ],
  providers: [
    CocktailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
