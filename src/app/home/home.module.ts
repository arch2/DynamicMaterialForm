import { NgModule, Optional, SkipSelf } from '@angular/core';
import { IMPORTED_MODULES, COMPONENT_DECLARATIONS, COMPONENT_EXPORTS } from './home.common';

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
export class HomeModule {
  constructor(@Optional() @SkipSelf() parentModule: HomeModule) {
    if (parentModule) {
      throw new Error('HomeModule already loaded; Import in root module only.');
    }
  }
}
