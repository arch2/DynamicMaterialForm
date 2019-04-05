import { NgModule } from '@angular/core';
import { IMPORTED_MODULES, COMPONENT_DECLARATIONS, COMPONENT_EXPORTS } from './mpev-form.common';

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
export class MpevFormModule { }