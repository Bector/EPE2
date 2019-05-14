import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit {

  constructor(public navctrl : NavController) { }

  atras(){
    this.navctrl.navigateForward("otros");
  }


  ngOnInit() {
  }

}
