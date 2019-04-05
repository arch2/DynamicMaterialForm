import { NgModule } from '@angular/core';
import { COMPONENT_DECLARATIONS, IMPORTED_MODULES, COMPONENT_EXPORTS } from './dynamic-form.common';

@NgModule({
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
  imports: [
    ...IMPORTED_MODULES
  ],
  exports: [
    ...COMPONENT_EXPORTS
  ]
})
export class DynamicFormModule { }
