import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.page.html',
  styleUrls: ['./avengers.page.scss'],
})
export class AvengersPage implements OnInit {

  constructor(public navctrl : NavController) { }

  atras(){
    this.navctrl.navigateForward("accion");
  }

  ngOnInit() {
  }

}
