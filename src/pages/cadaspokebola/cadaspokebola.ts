import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { PokebolaPage } from './../pokebola/pokebola';
/**
 * Generated class for the CadaspokebolaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadaspokebola',
  templateUrl: 'cadaspokebola.html',
})
export class CadaspokebolaPage {
	
  private url:string = "http://localhost:3000/pokebola";
    public pokebola = {
    
      thumb: "",  
		nome: "",  
		preco:"",
		localizacao:"",
		particularidade: "",
		chancecap: ""
  };
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http,
              public toastCtrl: ToastController) {
  }
	Pokebola(pokebola){
    let headers = new Headers();
    headers.append('Content-type','application/json');

    let options = new RequestOptions({ headers: headers });

    this.http.post(this.url, pokebola, options)
            .map(res => res.json())
            .subscribe(data => {
              const toast = this.toastCtrl.create({
                message: 'Pokebola cadastrado com Sucesso!',
                showCloseButton: true,
                closeButtonText: 'Ok'
              });
              toast.present();
              this.navCtrl.push(PokebolaPage);
            });

      pokebola.nome = "";
      pokebola.thumb = "";
      pokebola.preco = "";
      pokebola.localizacao = "";
      pokebola.particularidade = "";
      pokebola.chancecap = "";

}
}