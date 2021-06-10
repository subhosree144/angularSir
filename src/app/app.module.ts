import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwowayComponent } from './twoway/twoway.component';
import { Twoway2Component } from './twoway2/twoway2.component';

@NgModule({
  declarations: [
    AppComponent,
    TwowayComponent,
    Twoway2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
