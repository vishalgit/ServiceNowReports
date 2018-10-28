import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from './layout.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    LayoutService
  ]
})
export class CoreModule { 
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ){
      if(parentModule){
        throw new Error('CoreModule is already loaded. Import only in AppModule');
      }
  }
}
