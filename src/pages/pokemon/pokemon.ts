import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {  HttpModule } from '@angular/http';
import "rxjs/add/operator/map";

/**
 * Generated class for the PokemonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pokemon',
  templateUrl: 'pokemon.html',
})
export class PokemonPage {

  private url:string = "http://localhost:3000/pokemon";
  public dados: Array<{}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
 		
        this.http.get(this.url)
        .map(res => res.json())
        .subscribe(data => {
          this.dados = data;
        });

  } 
  detalhes(id:number){
    this.navCtrl.push("DetapokePage", {
      id: id
    })
  }

}
