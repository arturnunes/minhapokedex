import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { InsigniaPage } from './../insignia/insignia';

/**
 * Generated class for the CadasinsigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadasinsig',
  templateUrl: 'cadasinsig.html',
})
export class CadasinsigPage {

  private url:string = "http://localhost:3000/insignia";

   public insig = {
    id:"",
    thumb: "",  
		nome: "",  
		lider:"",
		elemento:""
  };

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http,
              public toastCtrl: ToastController) {
  }
  	Insignia(insig){
    let headers = new Headers();
    headers.append('Content-type','application/json');

    let options = new RequestOptions({ headers: headers });

    this.http.post(this.url, insig, options)
            .map(res => res.json())
            .subscribe(data => {
              const toast = this.toastCtrl.create({
                message: 'Insignia cadastrado com Sucesso!',
                showCloseButton: true,
                closeButtonText: 'Ok'
              });
              toast.present();
              this.navCtrl.push(InsigniaPage);
            });

      insig.thumb = "";
      insig.nome = "";
      insig.lider = "";
      insig.elemento = "";

}
}