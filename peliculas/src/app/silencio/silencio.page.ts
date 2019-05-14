import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-silencio',
  templateUrl: './silencio.page.html',
  styleUrls: ['./silencio.page.scss'],
})
export class SilencioPage implements OnInit {

  constructor(public navctrl : NavController) { }

  atras(){
    this.navctrl.navigateForward("terror");
  }
  ngOnInit() {
  }

}
