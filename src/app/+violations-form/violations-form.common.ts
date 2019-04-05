import { ViolationFormComponent } from './components';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { DynamicFormModule } from '../dynamic-form';
import { RouterModule } from '@angular/router';
import { ViolationRoutes } from './violations-form.routes';

export const IMPORTED_MODULES: any = [
    CommonModule,
    SharedModule,
    DynamicFormModule,
    RouterModule.forChild(<any>ViolationRoutes)
];
export const COMPONENT_DECLARATIONS: any[] = [
    ViolationFormComponent
];
export const COMPONENT_EXPORTS: any[] = [
    ViolationFormComponent
];