import { ControlDateComponent } from './components';
import { CommonModule } from '@angular/common';
import { ValidationService } from './services';
import { DataLoadService } from './services/data-load.service';

export const IMPORTED_MODULES: any = [
    CommonModule
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