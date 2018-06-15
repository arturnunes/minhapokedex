import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetapokePage } from './detapoke';

@NgModule({
  declarations: [
    DetapokePage,
  ],
  imports: [
    IonicPageModule.forChild(DetapokePage),
  ],
})
export class DetapokePageModule {}
