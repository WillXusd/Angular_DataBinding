import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { FormsModule } from '@angular/forms';
import { ConduitComponent } from './conduit/conduit.component';
@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    ConduitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
