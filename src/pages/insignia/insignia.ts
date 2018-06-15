import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {  HttpModule } from '@angular/http';
import "rxjs/add/operator/map";

/**
 * Generated class for the InsigniaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insignia',
  templateUrl: 'insignia.html',
})
export class InsigniaPage {

  private url:string = "http://localhost:3000/insignia";
  public dados: Array<{}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
         this.http.get(this.url)
        .map(res => res.json())
        .subscribe(data => {
          this.dados = data;
        });

  }

}
