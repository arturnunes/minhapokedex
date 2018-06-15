import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {  HttpModule } from '@angular/http';
import { SearchPipe } from '../pipes/search/search';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PokemonPage } from '../pages/pokemon/pokemon';
import { PokebolaPage } from '../pages/pokebola/pokebola';
import { InsigniaPage } from '../pages/insignia/insignia';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CadaspokePage } from '../pages/cadaspoke/cadaspoke';
import { CadaspokebolaPage } from '../pages/cadaspokebola/cadaspokebola';
import { CadasinsigPage } from '../pages/cadasinsig/cadasinsig';
import { Http } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PokemonPage,
    PokebolaPage,
    InsigniaPage,
    CadastroPage,
    CadaspokePage,
    CadaspokebolaPage, 
    CadasinsigPage,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PokemonPage,
    PokebolaPage,
    InsigniaPage,
    CadastroPage,
    CadaspokePage,
    CadaspokebolaPage, 
    CadasinsigPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
