import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadaspokePage } from './cadaspoke';

@NgModule({
  declarations: [
    CadaspokePage,
  ],
  imports: [
    IonicPageModule.forChild(CadaspokePage),
  ],
})
export class CadaspokePageModule {}
