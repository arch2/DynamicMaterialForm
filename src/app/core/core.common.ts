import { ControlDateComponent } from './components';
import { CommonModule } from '@angular/common';
import { ValidationService } from './services';
import { DataLoadService } from './services/data-load.service';
import { SharedModule } from '../shared';

export const IMPORTED_MODULES: any = [
    CommonModule,
    SharedModule
];
export const COMPONENT_DECLARATIONS: any[] = [
    ControlDateComponent,
];
export const COMPONENT_EXPORTS: any[] = [
    ControlDateComponent,
];
export const PROVIDERS_DECLARATIONS: any[] = [
    ValidationService,
    DataLoadService
]