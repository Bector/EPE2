import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-pantera',
  templateUrl: './pantera.page.html',
  styleUrls: ['./pantera.page.scss'],
})
export class PanteraPage implements OnInit {

  constructor(public navctrl : NavController) { }

  atras(){
    this.navctrl.navigateForward("accion");
  }

  ngOnInit() {
  }

}
