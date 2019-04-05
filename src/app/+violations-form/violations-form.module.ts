import { NgModule } from '@angular/core';
import { IMPORTED_MODULES, COMPONENT_DECLARATIONS, COMPONENT_EXPORTS } from './violations-form.common';

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
export class ViolationsFormModule { }