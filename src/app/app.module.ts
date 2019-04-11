import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SHARED_MODULES, GLOBAL_PROVIDERS } from './app.common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ...SHARED_MODULES
  ],
  providers: [GLOBAL_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
