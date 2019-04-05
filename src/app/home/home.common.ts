import { HomeComponent } from './components';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';

export const IMPORTED_MODULES: any = [
    CommonModule,
    SharedModule,
    RouterModule.forChild(<any>HomeRoutes),
];
export const COMPONENT_DECLARATIONS: any[] = [
    HomeComponent
];
export const COMPONENT_EXPORTS: any[] = [
    HomeComponent
];