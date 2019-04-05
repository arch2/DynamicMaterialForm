import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SHARED_MODULES } from './app.common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ...SHARED_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
