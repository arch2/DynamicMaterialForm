import { MpevFormComponent } from './components';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { DynamicFormModule } from '../dynamic-form';
import { MpevRoutes } from './mpev-form.routes';
import { RouterModule } from '@angular/router';

export const IMPORTED_MODULES: any = [
    CommonModule,
    SharedModule,
    DynamicFormModule,
    RouterModule.forChild(<any>MpevRoutes)
];
export const COMPONENT_DECLARATIONS: any[] = [
    MpevFormComponent
];
export const COMPONENT_EXPORTS: any[] = [
    MpevFormComponent
];