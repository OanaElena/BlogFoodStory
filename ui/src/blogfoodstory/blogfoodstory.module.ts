import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MaterialModule} from "./material.module";
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MenuItemComponent } from './menu-item/menu-item.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    MenuItemComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class BlogfoodstoryModule { }
