import { FormLayoutComponent, FormCardComponent, FormSectionComponent } from './components';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';

export const IMPORTED_MODULES: any = [
    CommonModule,
    SharedModule
];
export const COMPONENT_DECLARATIONS: any[] = [
    FormLayoutComponent,
    FormCardComponent,
    FormSectionComponent
];
export const COMPONENT_EXPORTS: any[] = [
    FormLayoutComponent,
    FormCardComponent,
    FormSectionComponent
];