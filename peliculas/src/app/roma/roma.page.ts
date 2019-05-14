import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-roma',
  templateUrl: './roma.page.html',
  styleUrls: ['./roma.page.scss'],
})
export class RomaPage implements OnInit {

  constructor(public navctrl : NavController) { }

  atras(){
    this.navctrl.navigateForward("otros");
  }
  ngOnInit() {
  }

}
