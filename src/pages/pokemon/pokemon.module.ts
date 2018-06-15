import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PokemonPage } from './pokemon';

@NgModule({
  declarations: [
    PokemonPage,
  ],
  imports: [
    IonicPageModule.forChild(PokemonPage),
  ],
})
export class PokemonPageModule {}
