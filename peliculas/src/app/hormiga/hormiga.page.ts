import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-hormiga',
  templateUrl: './hormiga.page.html',
  styleUrls: ['./hormiga.page.scss'],
})
export class HormigaPage implements OnInit {

  constructor(public navCtrl : NavController) { }

  atras(){
    this.navCtrl.navigateForward('accion');
  }

  ngOnInit() {
  }

}
