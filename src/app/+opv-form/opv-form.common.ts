
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { DynamicFormModule } from '../dynamic-form';
import { RouterModule } from '@angular/router';
import { OpvRoutes } from './opv-form.routes';
import { OpvFormComponent } from './components';

export const IMPORTED_MODULES: any = [
    CommonModule,
    SharedModule,
    DynamicFormModule,
    RouterModule.forChild(<any>OpvRoutes)
];
export const COMPONENT_DECLARATIONS: any[] = [
    OpvFormComponent
];
export const COMPONENT_EXPORTS: any[] = [
    OpvFormComponent
];