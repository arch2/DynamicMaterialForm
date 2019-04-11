import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared';
import { CoreModule } from './core';
import { DynamicFormModule } from './dynamic-form';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

export const SHARED_MODULES: any[] = [
    AppRoutingModule,
    DynamicFormModule,
    HomeModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule
];
export const GLOBAL_PROVIDERS: any[] = [
    { provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true } }
]

export * from './app-routing.module';
