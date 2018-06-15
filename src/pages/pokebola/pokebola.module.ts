import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PokebolaPage } from './pokebola';

@NgModule({
  declarations: [
    PokebolaPage,
  ],
  imports: [
    IonicPageModule.forChild(PokebolaPage),
  ],
})
export class PokebolaPageModule {}
