import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-dbs',
  templateUrl: './dbs.page.html',
  styleUrls: ['./dbs.page.scss'],
})
export class DbsPage implements OnInit {

  constructor(public navctrl : NavController) { }

  atras(){
    this.navctrl.navigateForward("accion");
  }

  ngOnInit() {
  }

}
