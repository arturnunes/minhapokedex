import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PokemonPage } from '../pages/pokemon/pokemon';
import { PokebolaPage } from '../pages/pokebola/pokebola';
import { InsigniaPage } from '../pages/insignia/insignia';
import { CadastroPage } from '../pages/cadastro/cadastro';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;

  public rootPage: any;
  public pages: Array<{titulo: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    
    this.rootPage = HomePage;

    this.pages = [
        {titulo: 'Pokemon',   component: PokemonPage,   icon: '../assets/imgs/Egg.png'},
        {titulo: 'Pokebola',  component: PokebolaPage,  icon: '../assets/imgs/Pokeballs.png'},
        {titulo: 'Insignias',   component: InsigniaPage,   icon: '../assets/imgs/Insignia.png'},
        {titulo: 'Cadastro',   component: CadastroPage,   icon: '../assets/imgs/openbola.png'}
        ];

      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
}
 goToPage(page){
  this.nav.push(page);
  }
 
}

