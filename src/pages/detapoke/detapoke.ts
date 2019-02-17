import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { p } from '../../model/p';
import { Http } from '@angular/http';

/**
 * Generated class for the DetapokePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detapoke',
  templateUrl: 'detapoke.html',
})
export class DetapokePage {
  public id;
  public obg: any;
  public pokemon: p;
  public data: any;

  getEpisodeById(id: number) {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http
        .get(`http://localhost:3000/pokemon/${id}`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public toastCtrl: ToastController) {

    this.id = navParams.get("id");
    this.pokemon = new p();
    console.log(this.id);
    this.getEpisodeById(this.id).then(data => {
      this.obg = data;
      this.pokemon.id = this.obg.id;
      this.pokemon.nome = this.obg.nome;
      this.pokemon.thumb = this.obg.thumb;
      this.pokemon.img = this.obg.img;
      this.pokemon.desc1 = this.obg.desc1;
      this.pokemon.desc2 = this.obg.desc2;
      this.pokemon.desc3 = this.obg.desc3;
      this.pokemon.Tipo1 = this.obg.Tipo1;
      this.pokemon.Tipo2 = this.obg.Tipo2;
      this.pokemon.Habilidade1 = this.obg.Habilidade1;
      this.pokemon.Habilidade2 = this.obg.Habilidade2;
      this.pokemon.especie = this.obg.especie;
      this.pokemon.Catchrate = this.obg.Catchrate;
      this.pokemon.EggGroup1 = this.obg.EggGroup1;
      this.pokemon.EggGroup2 = this.obg.EggGroup2;
      this.pokemon.Tempo_nasc = this.obg.Tempo_nasc;
      this.pokemon.Altura = this.obg.Altura;
      this.pokemon.Peso = this.obg.Peso;
      this.pokemon.hp = this.obg.hp;
      this.pokemon.ataque = this.obg.ataque;
      this.pokemon.defesa = this.obg.defesa;
      this.pokemon.sp_ata = this.obg.sp_ata;
      this.pokemon.sp_defesa = this.obg.sp_defesa;
      this.pokemon.speed = this.obg.speed;
      this.pokemon.levelup = this.obg.levelup;
      this.pokemon.imgpokeprin = this.obg.imgpokeprin;
      this.pokemon.pokeinicial = this.obg.pokeinicial;
      this.pokemon.evolucao1 = this.obg.evolucao1;
      this.pokemon.imgevo1 = this.obg.imgevo1;
      this.pokemon.evolucao2 = this.obg.evolucao2;
      this.pokemon.imgevo2 = this.obg.imgevo2;
      console.log(this.pokemon);
    });
  }

}