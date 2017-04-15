import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-traduccion',
  templateUrl: 'traduccion.html'
})
export class TraduccionPage {
  items: any;
  category: any;
  limit: any;

  constructor(public navCtrl: NavController) {
  }

  
}
