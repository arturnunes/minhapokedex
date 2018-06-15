import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { pb } from '../../model/pb';
import { Http } from '@angular/http';

/**
 * Generated class for the DetapokebolaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detapokebola',
  templateUrl: 'detapokebola.html',
})
export class DetapokebolaPage {
	public id;
  	public obg: any;
  	public pokebola: pb;
 	public data:any;
	
	getEpisodeById(id: number) {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http
        .get(`http://localhost:3000/pokebola/${id}`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http:Http,
              public toastCtrl:ToastController) {
              this.id = navParams.get("id");
    	this.pokebola = new pb();
    	console.log(this.id);
    	this.getEpisodeById(this.id).then(data => {
      this.obg = data;
      this.pokebola.id = this.obg.id;
      this.pokebola.nome = this.obg.nome;
      this.pokebola.thumb = this.obg.thumb;
      this.pokebola.preco = this.obg.preco;
      this.pokebola.localizacao = this.obg.localizacao;
      this.pokebola.particularidade = this.obg.particularidade;
      this.pokebola.chancecap = this.obg.chancecap;
 	  console.log(this.pokebola);
    });
  }

}
