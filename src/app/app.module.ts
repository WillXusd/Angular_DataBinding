import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { FormsModule } from '@angular/forms';
import { ConduitComponent } from './conduit/conduit.component';
import { MultiplePipe } from './pipe/multiple.pipe';
@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    ConduitComponent,
    MultiplePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
