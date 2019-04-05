import { NgModule } from '@angular/core';
import { SHARED_MODULES, COMPONENT_DECLARATIONS, COMPONENT_EXPORTS } from './shared.common';

@NgModule({
  imports: [
    ...SHARED_MODULES
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
  exports: [
    ...COMPONENT_EXPORTS
  ]
})
export class SharedModule { }
