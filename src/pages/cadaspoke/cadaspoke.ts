import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { PokemonPage } from './../pokemon/pokemon';

/**
 * Generated class for the CadaspokePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadaspoke',
  templateUrl: 'cadaspoke.html',
})
export class CadaspokePage {
	
  private url:string = "http://localhost:3000/pokemon";

    public pokepush = {
    
    thumb: "",
    img: "",  
		nome: "",  
		desc1: "",
		desc2: "",
		desc3: "",
		Tipo1: "",
		Tipo2: "",
		Habilidade1: "",
		Habilidade2: "",
		Catchrate: "",
		especie: "",
		EggGroup1: "",
		EggGroup2: "",
		Tempo_nasc: "",
		Altura: "",
		Peso: "",
		hp: "",
		ataque: "",
		defesa: "",
		sp_ata: "",
		sp_defe: "",
		speed: "",
		levelup: "",
		imgpokeprin: "",
		pokeinicial: "",
		evolucao1: "",
		imgevo1: "",
		evolucao2: "",
		imgevo2: ""
		  };

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http,
              public toastCtrl: ToastController) {
  }

	 pokemon(pokepush){
    let headers = new Headers();
    headers.append('Content-type','application/json');

    let options = new RequestOptions({ headers: headers });

    this.http.post(this.url, pokepush, options)
            .map(res => res.json())
            .subscribe(data => {
              const toast = this.toastCtrl.create({
                message: 'Pokemon cadastrado com Sucesso!',
                showCloseButton: true,
                closeButtonText: 'Ok'
              });
              toast.present();
              this.navCtrl.push(PokemonPage);
            });

      pokepush.thumb = "";
      pokepush.img = "";
      pokepush.nome = "";
      pokepush.desc1 = "";
      pokepush.desc2 = "";
      pokepush.desc3 = "";
      pokepush.Tipo1 = "";
      pokepush.Tipo2 = "";
      pokepush.Habilidade1 = "";
      pokepush.Habilidade2 = "";
      pokepush.Catchrate = "";
      pokepush.especie = "";
      pokepush.EggGroup1 = "";
      pokepush.EggGroup2 = "";
      pokepush.Tempo_nasc = "";
      pokepush.Altura = "";
      pokepush.Peso = "";
      pokepush.hp = "";
      pokepush.ataque = "";
      pokepush.defesa = "";
      pokepush.sp_ata = "";
      pokepush.sp_defe = "";
      pokepush.speed = "";
      pokepush.levelup = "";
      pokepush.imgpokeprin = "";
      pokepush.pokeinicial = "";
	    pokepush.evolucao1 = "";
	    pokepush.imgevo1 = "";
	    pokepush.evolucao2 = "";
	    pokepush.imgevo2 = "";
}
}