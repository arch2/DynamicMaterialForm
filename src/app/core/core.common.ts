import { ControlDateComponent, ControlTextboxComponent, ControlCheckboxComponent, ControlDropdownComponent, ControlButtonComponent } from './components';
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
    ControlTextboxComponent,
    ControlCheckboxComponent,
    ControlDropdownComponent,
    ControlButtonComponent
];
export const COMPONENT_EXPORTS: any[] = [
    ControlDateComponent,
    ControlTextboxComponent,
    ControlCheckboxComponent,
    ControlDropdownComponent,
    ControlButtonComponent
];
export const PROVIDERS_DECLARATIONS: any[] = [
    ValidationService,
    DataLoadService
]