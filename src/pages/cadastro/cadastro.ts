import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core'
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../home/home';
import { CadaspokePage } from '../cadaspoke/cadaspoke';
import { CadaspokebolaPage } from '../cadaspokebola/cadaspokebola';
import { CadasinsigPage } from '../cadasinsig/cadasinsig';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public rootPage: any;
  public pages: Array<{titulo: string, component: any, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.rootPage = HomePage;

    this.pages = [
        {titulo: 'Pokemon',   component: CadaspokePage,   icon: '../../assets/imgs/Egg.png'},
        {titulo: 'Pokebola',  component: CadaspokebolaPage,  icon: '../../assets/imgs/Pokeballs.png'},
        {titulo: 'Insignias', component: CadasinsigPage,   icon: '../../assets/imgs/Insignia.png'}
        ];

      
  }

  goToPage(page){
  this.navCtrl.push(page);
  } 

}
