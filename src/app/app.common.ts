import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared';
import { CoreModule } from './core';
import { DynamicFormModule } from './dynamic-form';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';

export const SHARED_MODULES: any[] = [
    AppRoutingModule,
    DynamicFormModule,
    HomeModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule
];

export * from './app-routing.module';
