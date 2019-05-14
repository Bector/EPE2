import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-kingsman',
  templateUrl: './kingsman.page.html',
  styleUrls: ['./kingsman.page.scss'],
})
export class KingsmanPage implements OnInit {

  constructor(public navCtrl : NavController) { }
  atras(){
    this.navCtrl.navigateForward('accion');
  }

  ngOnInit() {
  }

}
