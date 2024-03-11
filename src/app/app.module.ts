import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component'; // @app keyword is set in tsconfig.json, It's using to indicate the root path
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'; // temporary changes, need to move into shared Mat Module

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule  // temporary changes, need to move into shared Mat Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
